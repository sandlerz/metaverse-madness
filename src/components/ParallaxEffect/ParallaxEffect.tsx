/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'

interface Props {
  children: React.ReactNode[] | React.ReactNode
  initial?: CSSProperties
  whileInView?: CSSProperties
}

export const ParallaxEffect = ({
  children,
  initial = {},
  whileInView = {},
}: Props) => {
  const variants = {
    initial: { opacity: 0, translateY: '500px', ...(initial as any) },
    whileInview: { opacity: 1, translateY: '0', ...(whileInView as any) },
  }

  return (
    <motion.div
      initial="initial"
      whileInView="whileInview"
      viewport={{ once: true, amount: 'some', margin: '100px' }}
      transition={{ duration: 2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
