import React from 'react';
import { createRoot } from 'react-dom/client';
import Blog from 'util/blog/blog';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(<Blog />);