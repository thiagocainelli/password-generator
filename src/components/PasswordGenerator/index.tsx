"use client"

import { IconKey, IconClipboardCopy, IconClipboardCheck, IconLock } from "@tabler/icons-react"
import { useState } from "react"
function PasswordGenerator() {
    
    const [copyText, setCopyText] = useState<string>("Copiar")
    const [password, setPassword] = useState<string>("")
    const [passwordSize, setPasswordSize] = useState<number>(1)  
    
    const generatePassword = () => {
        const caractersPermited = "1234567890!@#$&*-_=+qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM.?"
        let newPassword = ""

        for(let i = 0; i < passwordSize; i++) {
            const position = Math.floor(Math.random() * caractersPermited.length)
            newPassword += caractersPermited[position]
            console.log(newPassword)
        }

        setPassword(newPassword)
        setCopyText("Copiar")
    }

    const copyToClipboard = () => {
        window.navigator.clipboard.writeText(password)
        setCopyText("Copiado!")
    }

    return (
        <section className="bg-zinc-800 p-5 rounded-sm flex flex-col items-center max-w-[95%]">
            <h1 className="text-4xl mb-8 text-center">Gerador de Senha</h1>

            <div className="flex items-center justify-center gap-2 w-full mb-8">
                <label htmlFor="passwordSize">Tamanho da senha:</label>
                <input
                    className="bg-zinc-900 p-1 rounded-sm w-[20%] outline-none text-center" 
                    type="number" 
                    name="passwordSize"
                    id="passwordSize" 
                    value={passwordSize}
                    onChange={(ev) => setPasswordSize(Number(ev.target.value))}
                    min={1}
                />
            </div>
            
            <div className="flex items-center gap-7 mb-12">
                <div className="flex items-center">
                    <div className="bg-zinc-950 p-1 rounded-s-sm"><IconLock /></div>
                    <button 
                        className="bg-zinc-900 p-1 px-2 rounded-e-sm" 
                        onClick={generatePassword}
                    >
                        Gerar senha
                    </button>

                </div>

                <div className="flex items-center">
                    <div className="bg-zinc-950 p-1 rounded-s-sm">{copyText === "Copiar" ? <IconClipboardCopy /> : <IconClipboardCheck />}</div>
                    <button 
                        className="bg-zinc-900 p-1 px-2 rounded-e-sm" 
                        onClick={copyToClipboard}
                    >
                        {copyText}
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full">
                <div className="bg-zinc-950 p-1 rounded-s-sm"><IconKey /></div>
                <p className="bg-zinc-900 h-[32px] rounded-e-sm min-w-[50%] max-w-full flex items-center justify-center px-2">{password}</p>
            </div>
        </section>
    )
}

export default PasswordGenerator