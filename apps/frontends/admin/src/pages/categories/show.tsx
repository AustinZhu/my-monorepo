import { Show, TextField } from '@refinedev/antd';
import { useShow } from '@refinedev/core';
import { Typography } from 'antd';
import { type Category } from '@/types/category';

const { Title } = Typography;

export function CategoryShow(): React.ReactElement {
  const { query } = useShow<Category>({});
  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <TextField value={record?.id} />
      <Title level={5}>Title</Title>
      <TextField value={record?.title} />
    </Show>
  );
}
