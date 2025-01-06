import type { Meta, StoryObj } from '@storybook/react';
import { ButtonAnimated } from './../ButtonAnimated';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta = {
  title: 'Button Animated',
  component: ButtonAnimated,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      );
    },
  ],
};

type Story = StoryObj<typeof ButtonAnimated>;

export const Primary: Story = {
  args: {
    children: 'Hi',
  },
};

export default meta;
