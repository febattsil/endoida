'use client'

import MenuPillButton from './MenuPillButton'

type ButtonData = {
  id: string
  label: string
  href: string
}

type MenuPillProps = {
  buttons: ButtonData[]
  userData?: any
}

export default function MenuPill({ buttons, userData }: MenuPillProps) {
  const spacing = 2.4

  return (
    <group userData={userData}>
      {buttons.map((btn, index) => {
        const x = (index - (buttons.length - 1) / 2) * spacing

        return (
          <MenuPillButton
            key={btn.id}
            label={btn.label}
            href={btn.href}
            position={[x, 0, 0]}
          />
        )
      })}
    </group>
  )
}
