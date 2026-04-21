"use client";

import { Button } from "@/components/ui/button";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
                  <Field>
                    <FieldLabel htmlFor="fieldgroup-email" className="font-bold">
                      E-mail<span className="text-destructive">*</span>
                    </FieldLabel>
                    <InputGroup className="w-full bg-orange-50 border-orange-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all h-11">
                      <InputGroupInput
                        type="email"
                        id="fieldgroup-email"
                        placeholder="email@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                      <InputGroupAddon>
                        <Mail />
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="fieldgroup-senha" className="font-bold">
                      Senha<span className="text-destructive">*</span>
                    </FieldLabel>

                    <InputGroup className="w-full bg-orange-50 border-orange-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all h-11">
                      <InputGroupAddon>
                        <Lock />
                      </InputGroupAddon>
                      <InputGroupInput
                        id="fieldgroup-senha"
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        required
                        value={formData.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                      />

                      <InputGroupAddon
                        className="cursor-pointer text-black"
                        align="inline-end"
                        onClick={() => setShowPassword((prev) => !prev)}
                        title={showPassword ? "Ocultar senha" : "Mostrar senha"}
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                </FieldGroup>

                <Field orientation="horizontal">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-white text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                  >
                    ENTRAR
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
