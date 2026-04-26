"use client";

import {
  ADMIN_REGISTER_REDIRECT_PATH,
  DEFAULT_ADMIN_REGISTER_VALUES,
} from "@/constants/auth";
import { authClient } from "@/lib/auth-client";
import { classNames } from "@/utils/classNames";
import {
  adminRegisterSchema,
  type AdminRegisterFormValues,
} from "@/validation/authSchema";
import { LoadingButton, RHFInput, RHFInputGroup } from "@geckoui/geckoui";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function AdminRegisterPage() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const methods = useForm<AdminRegisterFormValues>({
    values: DEFAULT_ADMIN_REGISTER_VALUES,
    resolver: zodResolver(adminRegisterSchema),
  });

  const handleRegister = methods.handleSubmit(async (values) => {
    setSubmitError(null);

    const { error } = await authClient.signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    if (error) {
      setSubmitError(error.message ?? "Registration failed. Please try again.");
      return;
    }

    router.push(ADMIN_REGISTER_REDIRECT_PATH);
  });

  return (
    <div
      className={classNames(
        "min-h-screen",
        "bg-[#0A0A0A]",
        "flex items-center justify-center p-6",
        "bg-linear-to-br from-[#0A0A0A] via-[#111] to-accent/5",
      )}
    >
      <div className="max-w-md w-full">
        <div className="text-center mb-6 lg:mb-10">
          <h1 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-2">
            Admin Register
          </h1>
          <p className="text-white/40 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.5em]">
            ပိတ်ကား - စီမံခန့်ခွဲသူ အကောင့် ဖွင့်ရန်
          </p>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-3xl lg:rounded-[2.5rem] p-6 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />

          <FormProvider {...methods}>
            <form onSubmit={handleRegister} className="space-y-5">
              <RHFInputGroup
                label="Full Name"
                required
                className="space-y-2"
                labelClassName="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1"
                errorClassName="text-red-400 text-xs font-semibold"
              >
                <RHFInput
                  name="name"
                  placeholder="Admin Name"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-1.5 px-4 focus-within:ring-1 focus-within:ring-accent/30 transition-all"
                  inputClassName="py-4 font-bold placeholder:text-white/20"
                />
              </RHFInputGroup>

              <RHFInputGroup
                label="Email Address"
                required
                className="space-y-2"
                labelClassName="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1"
                errorClassName="text-red-400 text-xs font-semibold"
              >
                <RHFInput
                  name="email"
                  type="email"
                  placeholder="admin@patekar.com"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-1.5 px-4 focus-within:ring-1 focus-within:ring-accent/30 transition-all"
                  inputClassName="py-4 font-bold placeholder:text-white/20"
                />
              </RHFInputGroup>

              <RHFInputGroup
                label="Password"
                required
                className="space-y-2"
                labelClassName="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1"
                errorClassName="text-red-400 text-xs font-semibold"
              >
                <RHFInput
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-1.5 px-4 focus-within:ring-1 focus-within:ring-accent/30 transition-all"
                  inputClassName="py-4 font-bold placeholder:text-white/20"
                />
              </RHFInputGroup>

              <RHFInputGroup
                label="Confirm Password"
                required
                className="space-y-2"
                labelClassName="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1"
                errorClassName="text-red-400 text-xs font-semibold"
              >
                <RHFInput
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-1.5 px-4 focus-within:ring-1 focus-within:ring-accent/30 transition-all"
                  inputClassName="py-4 font-bold placeholder:text-white/20"
                />
              </RHFInputGroup>

              {submitError ? (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold">
                  {submitError}
                </div>
              ) : null}

              <LoadingButton
                type="submit"
                loading={methods.formState.isSubmitting}
                loadingText="Registering..."
                className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/10 disabled:opacity-50 disabled:scale-100"
              >
                အကောင့် ဖွင့်မည်
              </LoadingButton>
            </form>
          </FormProvider>
        </div>

        <p className="text-center mt-8 text-xs text-white/40 font-semibold">
          Already have admin access?{" "}
          <Link
            href="/admin/login"
            className="text-white hover:text-accent transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
