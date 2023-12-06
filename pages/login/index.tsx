import ImageCard from "../../components/loginSection/imageCard"
import LoginCard from "../../components/loginSection/loginCard"

interface LoginPageProps {

}
const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        <div className="h-full w-full relative " >
            <div className="">
                <img className="h-full max-h-screen w-full" src={"/image/Image.png"} alt="" />
            </div>
            <div className="absolute top-0 left-0">
                <img className="h-20 w-20" src={"/image/Ellipse.png"} alt="" />
            </div>
            <div className="absolute top-0 right-0">
                <img className="h-28 w-28" src={"/image/Rectangle.png"} alt="" />
            </div>
            <div className="absolute top-0 p-16 w-full"
            >
                <div className="rounded-xl bg-white w-full" style={{height:"calc(100vh - 128px)"}}>
                    <div className="flex">
                        <div className="w-[50%] h-full">
                            <LoginCard />
                        </div>
                        <div className="w-[50%] h-full">
                            <ImageCard />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default LoginPage