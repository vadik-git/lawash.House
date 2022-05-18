export default function () {
  const imageBase64 = (e: any, event: any) => {
    const file = e.target.files[0];  

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + ' kB',
        base64: reader.result,
        file: file,
      } as any;

      event(fileInfo)
    };
  };
  return { imageBase64 }
};