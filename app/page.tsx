import { ErrorMessage } from "@/components/ErrorMessage";
import { ThemeToggle } from "@/components/theme-toggle";
;

const Page =()=>{
  return(
    <div className="min-h-screen flex justify-center items-center" >
       <div className="max-full max-w-2xl">
        <ThemeToggle/>
     <ErrorMessage error="Senha incorreta"/>
       </div>
    </div>

  );
}

export default Page;