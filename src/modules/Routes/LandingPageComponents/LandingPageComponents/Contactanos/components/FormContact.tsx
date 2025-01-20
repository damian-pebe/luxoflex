"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import {  ContactIcon, LucideNotebookPen, MailPlus, Phone, User } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  description: z
    .string()
    .min(10, { message: "La descripción es demasiado corta." }),
});

export default function FormContact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-[30%]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {" "}
                  <div className="font-vt323 text-xl">
                    Nombre del contacto o empresa
                  </div>
                </FormLabel>

                <div className="flex items-center space-x-2">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        className="pl-10 py-6"
                        placeholder="Nombre..."
                        {...field}
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </FormControl>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {" "}
                  <div className="font-vt323 text-xl">Email</div>
                </FormLabel>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        className="pl-10 py-6"
                        placeholder="Correo electronico..."
                        {...field}
                      />
                      <MailPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
                    </div>
                  </FormControl>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {" "}
                  <div className="font-vt323 text-xl">Telefono</div>
                </FormLabel>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        className="pl-10 py-6"
                        placeholder="Telefono..."
                        {...field}
                      />
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
                    </div>
                  </FormControl>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {" "}
                  <div className="font-vt323 text-xl">Descripción</div>
                </FormLabel>
                <FormControl></FormControl>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <div className="relative w-full">
                      <Textarea
                        placeholder="Descripcion..."
                        className="pl-10 pt-5"
                        {...field}
                      />
                      <LucideNotebookPen className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="default"
            className="p-5 flex-grow w-full flex items-center justify-center gap-2 group"
          >
            <ContactIcon className="w-4 h-4 group-hover:animate-bounce transition-all duration-1000" />
            <span className="group-hover:animate-bounce transition-all duration-200">
              Enviar
            </span>
          </Button>{" "}
        </form>
      </Form>
    </div>
  );
}
