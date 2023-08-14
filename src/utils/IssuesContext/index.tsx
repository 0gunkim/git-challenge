import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IssueType } from '../../Types/IssueType';
interface ContextType {
  issues: IssuesType;
  pageCount: () => void;
  isLoading: string;
  detail: IssuesType;
  moveDetail: (issuesNum: string) => void;
}

const IssuesContext = createContext<any>(null);
export const useIssues = () => useContext(IssuesContext);
interface IssuesProviderProps {
  children: ReactNode;
  issuesService: any;
}
type IssuesType = IssueType[];

export function IssuseProvider({
  children,
  issuesService,
}: IssuesProviderProps) {
  const [issues, setIssuse] = useState<IssuesType>([]);
  const [detail, setDetail] = useState<IssuesType>([]);
  const [issuesNumber, setIssuesNumber] = useState('');
  const [isLoading, setIsLoading] = useState('fullfilled');
  const [pageNum, setPageNum] = useState(0);
  const pageCount = () => {
    setPageNum((pre) => pre + 1);
  };

  const moveDetail = useCallback(
    (issuesNum: string) => {
      setIssuesNumber(issuesNum);
    },
    [issuesNumber],
  );
  useEffect(() => {
    setIsLoading('pendding');
    try {
      if (isLoading === 'fullfilled') {
        issuesService.get(pageNum).then((pre: IssuesType) => {
          setIssuse((preIssues: IssuesType) => [...preIssues, ...pre]);
          setIsLoading('fullfilled');
        });
      }
    } catch (error) {
      setIsLoading('fullfilled');
      throw new Error('[Context] Get issues list data fail');
    }
  }, [pageNum]);

  useEffect(() => {
    try {
      if (issuesNumber !== '') {
        setIsLoading('pendding');
        issuesService.detailGet(issuesNumber).then((result: IssuesType) => {
          setDetail(result);
          setIsLoading('fullfilled');
        });
      }
    } catch (error) {
      throw new Error('[Context] Get Detail issue data fail');
    }
  }, [issuesNumber]);

  return (
    <IssuesContext.Provider
      value={{ issues, pageCount, isLoading, detail, moveDetail }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
