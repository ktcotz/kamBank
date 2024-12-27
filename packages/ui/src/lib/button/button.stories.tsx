import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Hello man!',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Hello!',
    disabled: false,
    variant: 'secondary',
  },
};

export const Link: Story = {
  args: {
    children: 'Hello!',
    disabled: false,
    variant: 'link',
  },
};
