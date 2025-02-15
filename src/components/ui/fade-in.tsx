'use client'

import { motion } from 'motion/react'
import { type ReactNode } from 'react'

interface FadeInProps {
	children: ReactNode
	delay?: number
	className?: string
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay,
				ease: [0.21, 0.47, 0.32, 0.98],
			}}
			className={className}
		>
			{children}
		</motion.div>
	)
}
