import { Checkbox, TextField } from "@mui/material"
import { useState } from "react"

interface LoginCardProps {

}
const LoginCard: React.FC<LoginCardProps> = () => {
    const [emailText, setEmailText] = useState("")
    const [passwordText, setPasswordText] = useState("")
    const [checkedUser, setCheckedUser] = useState(false)
    const [enableSubmit, setEnableSubmit] = useState(false)
    const [onHover, setOnHover] = useState(false)
    const [validEmail, setValidEmail] = useState("")
    const [validPassword, setValidPassword] = useState("")
    function handleEmail(value: string) {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        setEmailText(value)
        if (value == "") {
            setValidEmail("");
        }
        else if (regEx.test(value) && value != "") {
            setValidEmail("Valid Email");
        }
        else {
            setValidEmail("Invalid Email");
        }
    }

    function handlePassword(value: string) {
        var valid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{3,16}$/
        setPasswordText(value)
        if (value == "") {
            setValidPassword("")
        }
        else if (valid.test(value)) {
            setValidPassword("Valid Password")
        }
        else {
            setValidPassword("Invalid Password")
        }
    }

    function handleUserChecked(value: boolean) {
        setCheckedUser(value)
    }
    function checkSubmit() {
        if (validPassword == "Valid Password" && validEmail == "Valid Email") {
            console.log("Successfully submitted");

        }

    }
    return (
        <div className="">
            <div className="pt-10 flex justify-center">
                <img src={"/image/MazenetLogo.png"} alt="" />
            </div>
            <div className="pt-4 text-[#2b35af] text-2xl font-bold text-center">
                Login to your account
            </div>
            <div className=" pt-6 px-12">
                <TextField
                    className="w-full"
                    placeholder="Your email address"
                    value={emailText}
                    onChange={(event) => {
                        handleEmail(event.target.value)
                    }}
                    error={validEmail == "Invalid Email"}
                    helperText={validEmail == "Invalid Email" ? "Please enter valid email" : ""}
                    InputProps={{
                        sx: {
                            borderRadius: 40,
                            padding: 1,
                            fontFamily: "openSansBold",
                            fontSize: 14,
                        },
                    }
                    }
                />
            </div>
            <div className="pt-8 px-12">
                <TextField
                    className="w-full"
                    placeholder="*********"
                    value={passwordText}
                    onChange={(event) => {
                        handlePassword(event.target.value)
                    }}
                    error={validPassword == "Invalid Password"}
                    helperText={validPassword == "Invalid Password" ? "Password must have 1 special character,1 uppercase,1 lowercase and 1 number." : ""}
                    InputProps={{
                        sx: {
                            borderRadius: 40,
                            padding: 1,
                            fontFamily: "openSansBold",
                            fontSize: 14,
                        },
                    }
                    }
                />
            </div>
            <div className="pt-3 pl-12 flex items-center">
                <Checkbox checked={checkedUser} onChange={(event) => {
                    handleUserChecked(event.target.checked)
                }} />
                <div className="font-lg">
                    Remember username
                </div>
            </div>

            <div className="flex justify-center pt-6">
                <div className="w-32" onMouseEnter={() => {
                    setOnHover(true)
                }}
                    onMouseLeave={() => {
                        setOnHover(false)
                    }}>
                    <div className={`${onHover ? "hoverSubmitBtn cursor-pointer " : "submitBtn"} hover: text-center openSansSemiBold text-sm pt-1`} onClick={() => {
                        checkSubmit()
                    }}>SUBMIT</div>
                </div>
            </div>
            <div className="text-[#FC6600] text-sm text-center font-semibold pt-4 pb-8">
                <div className="cursor-pointer"> Forgot password?
                </div>
            </div>
        </div>
    )
}
export default LoginCard