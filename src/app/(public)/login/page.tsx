"use client";

import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Field, FieldGroup } from "@/components/ui/field";
import InputCustom from "@/src/components/ui/input/Input";
import ButtonCustom from "@/src/components/ui/button/Button";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.password && formData.password.length < 8) return;

    const token = "abcd";
    document.cookie = `token=${token}; path=/; max-age=86400`;

    router.push("/admin");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-[#F4883080] rounded-sm p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Login Administrador</h1>

            <form onSubmit={handleSubmit}>
              <FieldGroup className="space-y-3">
                <FieldGroup>
                  <InputCustom
                    icon={<Mail />}
                    type="email"
                    label="E-mail"
                    id="fieldgroup-email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />

                  <InputCustom
                    icon={<Lock />}
                    type="password"
                    label="Senha"
                    id="fieldgroup-password"
                    required
                    placeholder="Digite sua senha"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                </FieldGroup>

                <Field orientation="horizontal">
                  <ButtonCustom size="lg" type="submit" title="Fazer login">
                    ENTRAR
                  </ButtonCustom>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
