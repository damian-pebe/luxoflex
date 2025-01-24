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
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

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
    <div className="">
      <Card className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border-2 shadow-xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Envíanos un mensaje
          </CardTitle>
          <CardDescription className="text-lg">
            Completa el formulario y te responderemos lo antes posible
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-vt323 text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      Nombre del contacto o empresa
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          placeholder="Nombre..." 
                          {...field} 
                          className="pl-10 h-12 bg-white/5 backdrop-blur-sm border-2 focus-visible:ring-2 focus-visible:ring-blue-500" 
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-vt323 text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          placeholder="Correo electronico..." 
                          {...field} 
                          className="pl-10 h-12 bg-white/5 backdrop-blur-sm border-2 focus-visible:ring-2 focus-visible:ring-blue-500" 
                        />
                        <MailPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-vt323 text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      Teléfono
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          placeholder="Telefono..." 
                          {...field} 
                          className="pl-10 h-12 bg-white/5 backdrop-blur-sm border-2 focus-visible:ring-2 focus-visible:ring-blue-500" 
                        />
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-vt323 text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      Descripción
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Textarea 
                          placeholder="Descripcion..." 
                          {...field} 
                          className="pl-10 min-h-[150px] bg-white/5 backdrop-blur-sm border-2 focus-visible:ring-2 focus-visible:ring-blue-500" 
                        />
                        <LucideNotebookPen className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ContactIcon className="w-5 h-5 group-hover:animate-bounce transition-all duration-1000" />
                <span className="group-hover:animate-bounce transition-all duration-200">
                  Enviar Mensaje
                </span>
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
