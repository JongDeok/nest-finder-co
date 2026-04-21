export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-xl font-extrabold text-primary">힐링타임</div>
            <p className="mt-2 text-xs text-muted-foreground">
              오늘의 피로를 푸는 가장 빠른 방법, 힐링타임
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
              <li>마사지 예약</li>
              <li>스파·사우나</li>
              <li>왁싱·뷰티</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">제휴</h4>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>샵 등록 안내</li>
              <li>광고·제휴 문의</li>
              <li>채용</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} 힐링타임. 학습용 데모 프로젝트입니다.
        </div>
      </div>
    </footer>
  );
}
