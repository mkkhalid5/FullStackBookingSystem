'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignupPage = () => {

    const handleSignUP = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        console.log("data", userData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name, // required
            email: userData.email, // required
            password: userData.password, // required
            image: userData.image,
        });

        console.log("newUser", data);
        console.log("error", error);
        if (data) {
            redirect('/')
        }
        if (error) {
            alert(`status: ${error.status} statusText: ${error.statusText}`)
        }
    }

    const handleGoogleSignin = async () => {
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
                    <Form className="flex w-96 flex-col gap-4 p-2.5 space-y-4" onSubmit={handleSignUP} >
                        <TextField
                            isRequired
                            name="name"
                            type="text"

                        >
                            <Label>Your Name</Label>
                            <Input placeholder="khalid" />
                            <FieldError />
                        </TextField>
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
                            name="image"
                            type="text"
                        >
                            <Label>Image URL</Label>
                            <Input placeholder="Enter your image url" />
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
                                Create Account
                            </Button>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <hr className="w-full" /> <p className="w-full text-[#6C696D]">Or sign up with</p> <hr className="w-full" />
                        </div>
                        <div className="flex justify-center items-center gap-2 border py-2 cursor-pointer" onClick={handleGoogleSignin}>
                            <Image src={"https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico"} alt="google" width={20} height={20} />
                            <p>Sign Up With Google</p>
                        </div>
                        <p className="text-[#6C696D] text-center">Already have an account? <Link href={'/auth/login'}><span className="text-blue-500">Sign In</span></Link></p>
                    </Form>
                </Card>
            </div>

        </div>
    );
};

export default SignupPage;