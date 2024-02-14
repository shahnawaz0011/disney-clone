"use client"

import { z } from "zod"

const formSchema = z.object({
    username: z.string().min(2).max(50),
})


import React from 'react'
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem } from "./ui/form"
import { Input } from "./ui/input"


function SearchInput() {
    const formSchema = z.object({
        input: z.string().min(2).max(50),
    })
    const router = useRouter();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: { input: string }) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        router.push(`/search/${values.input}`);
        // form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name='input'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Search... " {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

            </form>

        </Form>
    )
}

export default SearchInput