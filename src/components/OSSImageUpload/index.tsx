import React, { useEffect, useRef, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import { App, Button, Form, Upload } from 'antd';
import { GET_OSS_INFO } from '../../graphql/oss';
import { useGet_Oss_InfoQuery } from '../../graphql/generated';
import ImgCrop from 'antd-img-crop';

// interface OSSDataType {
//   dir: string;
//   expire: string;
//   host: string;
//   policy: string;

//   x_oss_signature_version: string;
//   x_oss_credential: string;
//   signature: string;
//   security_token?: string;
// }



interface AliyunOSSUploadProps {
  value?: UploadFile[];
  onChange?: (file: UploadFile[]) => void;
  maxCount?: number,
  label?: string,
  imgCropAspect?: number
}

const OSSImageUpload: React.FC<Readonly<AliyunOSSUploadProps>> = ({ value, onChange, maxCount, label, imgCropAspect }) => {

  const { data, refetch } = useGet_Oss_InfoQuery()
  // Mock get OSS api
  // https://help.aliyun.com/document_detail/31988.html
  // const mockOSSData = () => {
  //   if (!data) return
  //   const mockData: OSSDataType = {
  //     dir: data.getOssInfo.dir,
  //     expire: data.getOssInfo.expire,
  //     host: data.getOssInfo.host,
  //     policy: data.getOssInfo.policy,
  //     signature: data.getOssInfo.signature,
  //     x_oss_signature_version: data.getOssInfo.x_oss_signature_version,
  //     x_oss_credential: data.getOssInfo.x_oss_credential,
  //     security_token: data.getOssInfo.security_token,
  //   };
  //   return Promise.resolve(mockData);
  // };

  const OSSData = data?.getOssInfo;
  console.log('OSSData', OSSData);

  const getKey = (file: UploadFile) => {
    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const key = `${OSSData?.dir}${file.uid}${suffix}`;
    const url = `${OSSData?.host}/${key}`;
    return { key, url };
  };

  //change监听事件
  const handleChange: UploadProps['onChange'] = ({ fileList }) => {
    const files = fileList.map(item => ({
      ...item,
      url: getKey(item).url
    }))

    // console.log('Aliyun OSS:', files);
    onChange?.(files);
  };

  const getExtraData: UploadProps['data'] = (file) => {
    const { key } = getKey(file)
    return {
      key,
      policy: OSSData?.policy,
      'x-oss-signature': OSSData?.signature,
      'x-oss-signature-version': OSSData?.x_oss_signature_version,
      'x-oss-credential': OSSData?.x_oss_credential,
      'x-oss-date': OSSData?.expire,
      'x-oss-security-token': OSSData?.security_token,
    }
  };


  const beforeUpload: UploadProps['beforeUpload'] = async (file) => {
    if (!OSSData) {
      return false;
    }
    const expire = Number(OSSData.expire) * 1000;
    if (expire < Date.now()) {
      await refetch();
    }
    return file;
  };

  const uploadProps: UploadProps = {
    name: 'file',
    fileList: value,
    action: OSSData?.host,
    onChange: handleChange,
    data: getExtraData,
    beforeUpload,
  };
  return (
    <ImgCrop rotate
      aspect={imgCropAspect || 1}
    >
      <Upload {...uploadProps}
        listType="picture-card"
        maxCount={maxCount}
      >
        {label || '上传头像'}
      </Upload>
    </ImgCrop>
  );
};

export default OSSImageUpload