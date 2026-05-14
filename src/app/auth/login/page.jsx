'use client'
import { authClient } from "@/lib/auth-client";
import {Button, Card, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const LoginPage = () => {
    const handleLoginPage =async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        console.log("user",userData);
        const {data, error} = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
        });

        if(data){
            redirect('/')
        }
         if(error){
            alert(`status: ${error.status} statusText: ${error.statusText}`)
        }
    }

    const handleGoogleSignin = async () =>{
        await authClient.signIn.social({
            provider: "google",
        })
    }
    return (
        <div className='p-20'>
                    <div className="w-max mx-auto">
                        <h2 className="text-center text-2xl font-semibold">Create Account</h2>
                        <p className="text-center text-[#6C696D] mb-6">Start your adventure with Wanderlust</p>
        
                        <Card className="rounded-none border">
                        <Form className="flex  flex-col gap-4 p-2.5 space-y-4" onSubmit={handleLoginPage}>
                           
                            <TextField
                                isRequired
                                name="email"
                                type="email"
        
                            >
                                <Label>Email</Label>
                                <Input placeholder="khalid@example.com" />
                                <FieldError />
                            </TextField>
                           
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                            >
                                <Label>Password</Label>
                                <Input placeholder="Enter your password" />
                                <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                <FieldError />
                            </TextField>
                            <div className="flex gap-2">
                                <Button type="submit" className={'w-full rounded-none bg-[#15A1BF]'}>
                                    Sign In
                                </Button>
                            </div>
                            <div className="flex justify-center items-center">
                                <hr className="w-full"/> <p className="text-center w-full text-[#6C696D]">Or continue with</p> <hr className="w-full" />
                            </div>
                            <div className="flex justify-center items-center gap-2 border py-2 cursor-pointer" onClick={handleGoogleSignin}>
                                <Image src={"https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico"} alt="google" width={20} height={20} />
                                <p>Sign Up With Google</p>
                            </div>
                            <p className="text-[#6C696D] text-center">Don`t have an account?  <Link href={'/auth/signup'}><span className="text-blue-500">Sign Up</span></Link></p>
                        </Form>
                    </Card>
                    </div>
                    
                </div>
    );
};

export default LoginPage;