import { ErrorMessage } from "@/components/ErrorMessage";
;

const Page =()=>{
  return(
    <div className="min-h-screen flex justify-center items-center" >
       <div className="max-full max-w-2xl">
     <ErrorMessage error="Senha incorreta"/>
       </div>
    </div>

  );
}

export default Page;