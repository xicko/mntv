'use client';

import React from 'react'
import { MDXProvider } from '@mdx-js/react'

type NewsMDXProps = {
    MDXContent: React.ComponentType;
}

const NewsMDX: React.FC<NewsMDXProps> = ({ MDXContent }) => {
  return (
    <MDXProvider>
        <div className='px-6 py-4'>
            <MDXContent />
        </div>
    </MDXProvider>
  )
}

export default NewsMDX