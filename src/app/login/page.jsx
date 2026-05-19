"use client";

import { useForm } from "react-hook-form"
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";

export default function OnSurface() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        // console.log(res, error);
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success("Login Successful");
        }


    }

    const handleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">
            <div className="flex flex-col gap-5 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:w-[30%] md:w-[50%] w-full max-w-md shadow-2xl">

                <Surface className="w-full bg-transparent shadow-none">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Fieldset className="w-full">
                            <Fieldset.Legend className="text-3xl font-bold text-white">
                                Login
                            </Fieldset.Legend>

                            <Description className="text-slate-400">
                                Give your profile information.
                            </Description>

                            <Fieldset.Group className="space-y-5 mt-6">


                                <TextField isRequired name="email" type="email">
                                    <Label className="text-slate-200">
                                        Email
                                    </Label>

                                    <Input
                                        placeholder="john@example.com"
                                        variant="secondary"
                                        {...register("email")}
                                        className="bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-2xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                    />

                                    <FieldError className="text-red-400 text-sm" />
                                </TextField>

                                <TextField
                                    isRequired
                                    name="password"
                                    type="password"
                                >
                                    <Label className="text-slate-200">
                                        Password
                                    </Label>

                                    <Input
                                        placeholder="password"
                                        variant="secondary"
                                        {...register("password")}
                                        className="bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-2xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                    />

                                    <FieldError className="text-red-400 text-sm" />
                                </TextField>

                                <h2 className="font-medium text-slate-400 text-sm">
                                    Don't have an account?
                                    <Link
                                        href="/register"
                                        className="text-sky-400 hover:text-sky-300 ml-1"
                                    >
                                        Register
                                    </Link>
                                </h2>
                            </Fieldset.Group>

                            <Fieldset.Actions className="mt-6 flex flex-col sm:flex-row gap-3">

                                <Button
                                    type="submit"
                                    className="w-full bg-sky-600 hover:bg-sky-500 text-white rounded-2xl border-none"
                                >
                                    <FloppyDisk />
                                    Login
                                </Button>

                                <Button
                                    type="reset"
                                    variant="tertiary"
                                    className="w-full rounded-2xl border border-sky-400 bg-transparent text-sky-400 px-4 py-2  hover:bg-[#232F72] hover:text-white transition"
                                >
                                    Reset
                                </Button>
                            </Fieldset.Actions>
                        </Fieldset>

                        <ToastContainer />
                    </Form>
                </Surface>

                <button
                    onClick={handleLogin}
                    className="w-full flex items-center justify-center gap-3 rounded-2xl border border-sky-500 bg-white/5 backdrop-blur-md px-4 py-3 font-medium text-slate-200 transition hover:bg-sky-500/10"
                >
                    <FcGoogle size={22} />
                    Continue with Google
                </button>
            </div>
        </div>
    )
}