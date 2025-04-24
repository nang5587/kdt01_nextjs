'use client' // client에서 실행, 이유는 localstorage는 서버에 없고 client에서만 알 수 있기 때문!!
import { useAtom } from "jotai"
import { logAtom } from "../atoms/IsLogin"
import { useEffect } from "react";
import Login from "./components/Login";
import Image from "next/image";

export default function Home() {
  //전역변수로 로그인 관리
  const [login, setLogin] = useAtom(logAtom);

  //새로고침 시 로그인 상태 유지
  useEffect(()=>{
    if (localStorage.getItem("email")) setLogin(true) ;
  }, []);

  return (
    <div className="w-full flex justify-end items-center">
      <div className="w-full">

      {/* 삼항연산자로 로그인 시 회원정보와 인사말 */}
      
      {login ? (
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white border-1 border-gray-100 shadow-md shadow-gray-300 rounded-2xl w-[350px] h-[150px] flex items-center justify-center text-center
                        hover:shadow-xl transition-shadow duration-300 ease-in-out mt-10 animate-fade-up">
          <h2 id="kakaoNomal" className="text-xl text-gray-700 leading-relaxed font-bold">
            안녕하세요, <br />
            <span className="text-blue-500">
              {localStorage.getItem('logEmail')}
            </span>
            님!
          </h2>  
        </div>

        {/* 지하철 이미지 */}
        <div className="flex w-full justify-start p-10">
          <div className="w-full  overflow-hidden">
            <Image id="animate-marquee" className="w-1/4" src="/train.png" width={300} height={100} alt="train" />
          </div>
        </div>
      </div>
      ) : (
        //로그인 안 했을 때는 로그인 화면
        <Login />
      )}
    </div>
  </div>
  );
}
