export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-xl font-extrabold text-primary">여기어때</div>
            <p className="mt-2 text-xs text-muted-foreground">
              여행이 필요한 모든 순간, 여기어때
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">고객지원</h4>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>1:1 문의</li>
              <li>자주 묻는 질문</li>
              <li>공지사항</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">서비스</h4>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>국내숙소</li>
              <li>해외숙소</li>
              <li>항공·티켓</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">회사</h4>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>회사 소개</li>
              <li>제휴·광고 문의</li>
              <li>채용</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} 여기어때 클론. 학습용 데모 프로젝트입니다.
        </div>
      </div>
    </footer>
  );
}
