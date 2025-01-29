import Logo from "../components/Logo";
import { signInWithGooglePopup } from "../utils/firebase";

const handleGoogleSignIn = async () => {
  const response = await signInWithGooglePopup();
  console.log(response);
}

const Login = () => {
  return (
    <div className="h-[100vh] w-full flex justify-between">
      <div className="w-[40%] font-urbanist h-full flex flex-col justify-center px-4 gap-2">
        <div className="flex items-center "> <Logo color="#7B1984" /> <p className="font-[700] text-[26px] text-accent">TaskBuddy</p></div>
        <p className="text-black font-[500] text-[12px] leading-[16px]"> Streamline your workflow and track progress effortlessly with our all-in-one task management app.</p>
        <button onClick={handleGoogleSignIn} className="py-2 items-center flex gap-2 bg-black text-white h-[50px] rounded-[18px] w-fit px-14 mt-4 cursor-pointer"><img src="/assets/svg/google.svg" alt="" /> Countinue with Google</button>
      </div>
      <div className="w-[55%] h-full relative flex items-center justify-end">
        <img src="/assets/login-circle-bg.png" alt="" className="w-full absolute z-0" />
        <img src="/assets/login-task-list.jpg" alt="" className="z-10 w-[80%]" />
      </div>
    </div>
  ) 
}

export default Login