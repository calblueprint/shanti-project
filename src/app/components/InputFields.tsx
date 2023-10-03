'use client'

import { FormHeaders, Input } from "../screens/loginScreen/styles"

export default function InputFields(props: { text: string, placeholder: string }) {
    return (
        <main>
            <div id="userInfo">
                <FormHeaders>{props.text}</FormHeaders>
                <Input type="text" placeholder={props.placeholder} />
            </div>
        </main>

    )
}
