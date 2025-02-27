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

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import {
  LucideNotebookPen,
  MailPlus,
  Phone,
  User,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

  function onSubmit(values: z.infer<typeof formSchema>) {
  
    console.log(values);
  }

  return (
    <div className="pt-10 w-[450px] flex justify-center items-center mx-auto">
      <Card className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border-2 shadow-xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl text-center font-bold font-orbitron text-white">
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
                      <FormLabel className=" text-sm text-white">
                        Email
                      </FormLabel>
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

<Button className="w-full bg-white/20  hover:bg-white/30 text-white font-semibold py-6 transition-all duration-300">
              Enviar mensaje a LUXOFLEX
            </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}


