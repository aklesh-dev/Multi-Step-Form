interface step5Props {
  purpose: string;
  subtext: string;
}

const Step5 = ({purpose, subtext}: step5Props) => {
  return (
    <div className='mt-10'>
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500">{subtext}</p>
      <div className="grid grid-cols-2 mt-5 gap-8">fields</div>
    </div>
  )
}

export default Step5;