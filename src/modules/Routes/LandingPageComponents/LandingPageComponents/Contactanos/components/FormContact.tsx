"use client";
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


import { Textarea } from "@/components/ui/textarea";
import { LucideNotebookPen, MailPlus, Phone, User } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}


export default function FormContact() {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });
  
  function onSubmit(values: FormData) {
    console.log(values);
    toast({
      title: "¡Éxito!",
      description:
        "Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.",
    });
  }
  return (
    <div className="pt-10 w-[450px] flex justify-center items-center mx-auto">
      <Card className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border-2 shadow-xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl text-center font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Envíanos un mensaje
          </CardTitle>
          <CardDescription className="text-lg text-center font-poppins">
            Completa el formulario y te responderemos lo antes posible
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className=" text-sm text-white">
                      Nombre del contacto o empresa
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Nombre..."
                          {...field}
                          className="pl-10 h-12 bg-white/5 border-white/20 focus:border-white/40 transition-all"
                        />
                        <User className="absolute left-3 bottom-3" />
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
                    <FormLabel className=" text-sm text-white">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Correo electronico..."
                          {...field}
                          className="pl-10 h-12 bg-white/5 border-white/20 focus:border-white/40 transition-all"
                        />
                        <MailPlus className="absolute left-3 bottom-3" />
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
                    <FormLabel className=" text-sm text-white">
                      Teléfono
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Telefono..."
                          {...field}
                          className="pl-10 h-12 bg-white/5 border-white/20 focus:border-white/40 transition-all"
                        />
                        <Phone className="absolute left-3 bottom-3" />
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
                    <FormLabel className=" text-sm text-white">
                      Descripción
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Textarea
                          placeholder="Descripcion..."
                          {...field}
                          className="pl-10 min-h-[150px] bg-white/5 border-white/20 focus:border-white/40 transition-all "
                        />
                        <LucideNotebookPen className="absolute left-3 top-3" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <Button
                className="w-full  font-semibold py-6 transition-all duration-700 text-transparent text-white bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 from-blue-600 to-purple-700"
                variant="default"
              >
                Enviar mensaje a LUXOFLEX
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
