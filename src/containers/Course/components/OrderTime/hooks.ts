import { useEffect, useMemo, useState } from "react";
import type { OrderTimeType, ReducibleTimeType } from "../../../../graphql/generated";
import { DAYS, isWorkDay } from "./constants";
import { useCourse, useEditCourse } from "../../../../services/course";
import { stripTypename } from "@apollo/client/utilities";


export const useOrderTime = (id: string, currentDayKey: string) => {
  const [reducibleTime, setReducibleTime] = useState<ReducibleTimeType[]>([])
  const { editHandler, loading: editLoading } = useEditCourse()
  const orderTime = useMemo(() => {
    const res = reducibleTime.find((item) => item.week === currentDayKey);
    return res?.orderTime || [];
  }, [reducibleTime, currentDayKey])
  const { getCourse, loading } = useCourse()
  const init = async () => {
    if (id) {
      const res = await getCourse(id)
      setReducibleTime(res?.reducibleTime || [])
    }
  }
  useEffect(() => {
    init()
  }, [id])
  const onSaveHandler = (ot: OrderTimeType[]) => {
    const rt = [...reducibleTime]
    const index = rt.findIndex(item => item.week === currentDayKey)
    if (index > -1) {
      rt[index] = {
        week: currentDayKey,
        orderTime: ot
      }
    } else {
      rt.push({
        week: currentDayKey,
        orderTime: ot
      })
    }
    editHandler({
      reducibleTime: stripTypename(rt)
    }, init, id)
  }
  const allWorkDaySyncHandler = () => {
    const rt: ReducibleTimeType[] = []
    DAYS.forEach(item => {
      if (isWorkDay(item.key)) {
        rt.push({
          week: item.key,
          orderTime,
        })
      }
    }
    )
    editHandler({
      reducibleTime: stripTypename(rt)
    }, init, id)
  }

  const allWeekSyncHandler = () => {
    const rt: ReducibleTimeType[] = []
    DAYS.forEach(item => {
      rt.push({
        week: item.key,
        orderTime,
      })
    })
    editHandler({
      reducibleTime: stripTypename(rt)
    }, init, id)
  }
  return {
    orderTime,
    loading: loading || editLoading,
    onSaveHandler,
    allWeekSyncHandler,
    allWorkDaySyncHandler,
  }
}