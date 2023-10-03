'use client'

import InputFields from "./InputFields"

export default function LoginForm() {
    return (
        <div>
            <InputFields text="Email address" placeholder="thisisanemail@email.com" />
            <InputFields text="Password" placeholder="************" />
        </div>
    )
}