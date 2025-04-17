import Image from 'next/image'

function MyClockImage(){
    return(
        <div className='w-70 h-70'>
            <Image src="/clock2.png" className="tilt-animation" width={400} height={400} alt="Clock"/>
        </div>
    )
}

export default MyClockImage