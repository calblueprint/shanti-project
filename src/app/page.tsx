/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href="/login">Login</Link>
    </main>
  );
}
