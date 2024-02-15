export interface JobfairModel {
  id: string;
  title: string;
  description: string;
  code: string;
  status: string;
}

export interface Props {
  id: string;
  title: string;
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
