export default function SobreLayout({ children } : Readonly<{children : React.ReactNode}>) {
    return (
        <div>
            Hello!
            {children}
        </div>
    )
}