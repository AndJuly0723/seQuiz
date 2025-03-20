constructor() {
  this.blockchainQuestions = [
    {
      question:
        "Revoke는 이미 승인한 스마트 컨트랙트 권한을 취소할 수 있는 기능이다.",
      answer: "O",
    },
    {
      question: "NFT 거래 시에도 트랜잭션 수수료(Gas Fee)가 필요하다.",
      answer: "O",
    },
    {
      question: "NFT는 특정 마켓플레이스에서만 거래할 수 있다.",
      answer: "X",
    },
    {
      question: "시드 구문을 잃어버려도 고객센터에 요청하면 복구할 수 있다.",
      answer: "X",
    },
    {
      question: "Revoke를 사용하면 지갑 자체를 초기화할 수 있다.",
      answer: "X",
    },
    {
      question: "Revoke를 사용하면 이미 승인된 거래를 되돌릴 수 있다.",
      answer: "X",
    },
    {
      question:
        "블록체인 주소가 다르면 동일한 사이트라도 피싱일 가능성이 있다.",
      answer: "O",
    },
    { question: "무료로 에어드롭된 NFT는 항상 안전하다.", answer: "X" },
    {
      question: "스마트 컨트랙트는 블록체인에 배포되면 변경이 가능하다.",
      answer: "X",
    },
    { question: "NFT는 항상 유일한 디지털 자산을 의미한다.", answer: "O" },
    {
      question:
        "하드웨어 지갑 없이도 MetaMask 같은 핫월렛을 안전하게 사용할 수 있다.",
      answer: "O",
    },
    {
      question: "NFT는 변조될 수 없는 블록체인 기술을 기반으로 한다.",
      answer: "O",
    },
    {
      question:
        "시드 구문을 안전하게 보관하는 가장 좋은 방법은 오프라인에서 종이에 적어두는 것이다.",
      answer: "O",
    },
    { question: "Revoke를 실행하면 가스비가 전혀 들지 않는다.", answer: "X" },
    {
      question:
        "스마트 컨트랙트가 내 지갑의 특정 토큰을 무제한으로 사용할 권한을 가질 수도 있다.",
      answer: "O",
    },
    {
      question:
        "NFT 거래 시 스마트 컨트랙트가 악용될 가능성이 있으므로 권한 설정을 조심해야 한다.",
      answer: "O",
    },
    {
      question: "NFT를 구매하면 해당 자산을 완전히 통제할 수 있다.",
      answer: "X",
    },
    {
      question: "어떤 스마트 컨트랙트든 한번 권한을 부여하면 변경할 수 없다.",
      answer: "X",
    },
    {
      question:
        "MetaMask 지갑은 모바일 앱과 브라우저 확장 프로그램에서 모두 사용할 수 있다.",
      answer: "O",
    },
    {
      question:
        "스마트 컨트랙트를 사용할 때는 코드 감사를 거치는 것이 중요하다.",
      answer: "O",
    },
    {
      question: "ERC-20 토큰은 이더리움 네트워크에서만 사용 가능하다.",
      answer: "O",
    },
    {
      question: "NFT를 전송하면 트랜잭션이 블록체인에 기록된다.",
      answer: "O",
    },
    {
      question:
        "다른 사람이 내 계정의 프라이빗 키를 알면 내 지갑을 제어할 수 있다.",
      answer: "O",
    },
    {
      question:
        "Revoke를 하지 않아도 토큰을 보유하고 있으면 해킹당할 위험이 없다.",
      answer: "X",
    },
    {
      question:
        "스마트 컨트랙트의 권한을 확인하려면 Etherscan 같은 블록체인 탐색기를 이용할 수 있다.",
      answer: "O",
    },
    {
      question:
        "NFT를 소유하면 해당 이미지의 저작권도 자동으로 소유하게 된다.",
      answer: "X",
    },
    {
      question:
        "피싱 사이트는 기존의 정상 사이트와 URL이 비슷하게 만들어진다.",
      answer: "O",
    },
    {
      question: "모든 블록체인 지갑은 비밀번호만 알면 복구할 수 있다.",
      answer: "X",
    },
    {
      question:
        "블록체인 지갑을 사용할 때 강력한 비밀번호를 설정하는 것이 보안을 강화하는 방법이다.",
      answer: "O",
    },
    {
      question:
        "출처가 불분명한 링크를 클릭하고 지갑을 연결하는 것은 안전하다.",
      answer: "X",
    },
    {
      question:
        "HTTPS가 없는 웹사이트에서도 안전하게 Web3 서비스를 사용할 수 있다.",
      answer: "X",
    },
    {
      question: "MetaMask의 시드 구문은 누구와 공유해도 안전하다.",
      answer: "X",
    },
    {
      question:
        "시드 구문을 안전하게 저장하려면 클라우드에 업로드하는 것이 가장 좋다.",
      answer: "X",
    },
    {
      question: "트랜잭션이 실패하면 가스비를 환불받을 수 있다.",
      answer: "X",
    },
    {
      question: "NFT 민팅을 할 때는 스마트 컨트랙트의 내용을 검토해야 한다.",
      answer: "O",
    },
    {
      question: "Revoke를 실행하면 내 지갑의 보안이 강화될 수 있다.",
      answer: "O",
    },
    {
      question:
        "스마트 컨트랙트 배포 후에도 개발자가 코드 일부를 수정할 수 있다.",
      answer: "X",
    },
    {
      question:
        "블록체인 네트워크에서는 수수료(Gas Fee)를 지불해야 트랜잭션이 처리된다.",
      answer: "O",
    },
    {
      question: "출처가 불분명한 NFT를 무료로 받을 경우 위험할 수 있다.",
      answer: "O",
    },
    {
      question:
        "트위터에서 받은 DM의 링크는 공식 계정이라면 안전하게 클릭할 수 있다.",
      answer: "X",
    },
    {
      question:
        "Revoke는 모든 블록체인 네트워크에서 동일한 방식으로 동작한다.",
      answer: "X",
    },
    {
      question:
        "스마트 컨트랙트의 코드에 취약점이 있을 경우, 해커가 이를 악용할 수 있다.",
      answer: "O",
    },
    {
      question:
        "하드웨어 지갑은 인터넷 없이도 안전하게 자산을 보관할 수 있다.",
      answer: "O",
    },
    {
      question:
        "웹사이트에서 지갑을 연결할 때 무조건 승인 버튼을 눌러야 한다.",
      answer: "X",
    },
    {
      question:
        "거래를 승인하기 전에 스마트 컨트랙트 내용을 확인하는 것이 중요하다.",
      answer: "O",
    },
    {
      question: "공식 사이트가 아닌 곳에서 다운로드한 MetaMask도 안전하다.",
      answer: "X",
    },
    { question: "트랜잭션을 승인하면 되돌릴 수 없다.", answer: "O" },
    {
      question: "하드웨어 지갑을 사용하면 해킹 위험이 완전히 사라진다.",
      answer: "X",
    },
    {
      question:
        "스마트 컨트랙트를 통해 자동으로 실행되는 거래는 항상 안전하다.",
      answer: "X",
    },
    {
      question: "피싱 사이트는 항상 팝업 광고를 통해 사용자를 유도한다.",
      answer: "X",
    },
    { question: "블록체인의 데이터는 누구나 확인할 수 있다.", answer: "O" },
    {
      question: "블록체인 노드는 데이터를 저장하고 검증하는 역할을 한다.",
      answer: "O",
    },
    { question: "모든 블록체인은 퍼블릭 블록체인이다.", answer: "X" },
    { question: "블록체인에서 데이터가 삭제될 수도 있다.", answer: "X" },
    {
      question: "Web3는 탈중앙화와 자율성을 기반으로 한 인터넷 개념이다.",
      answer: "O",
    },
    { question: "블록체인은 중앙 서버에서 데이터를 관리한다.", answer: "X" },
    {
      question: "블록체인에서는 트랜잭션이 승인되기 전까지 변경이 가능하다.",
      answer: "X",
    },
    {
      question:
        "블록체인에서 해시 함수는 데이터 무결성을 보장하는 역할을 한다.",
      answer: "O",
    },
    {
      question: "블록체인은 익명성이 완벽히 보장되는 기술이다.",
      answer: "X",
    },
    { question: "퍼블릭 블록체인은 누구나 참여할 수 있다.", answer: "O" },
    {
      question: "블록체인 트랜잭션을 처리하는 데 네트워크 수수료가 필요하다.",
      answer: "O",
    },
    {
      question: "블록체인에서는 모든 거래가 승인 후 즉시 처리된다.",
      answer: "X",
    },
    {
      question:
        "블록체인 주소는 공개되지만, 소유자의 신원은 항상 알 수 없다.",
      answer: "O",
    },
    {
      question: "블록체인 네트워크에서는 한 번 생성된 블록을 변경할 수 있다.",
      answer: "X",
    },
    {
      question:
        "블록체인 기술은 금융뿐만 아니라 다양한 산업에 활용될 수 있다.",
      answer: "O",
    },
    {
      question: "비트코인은 블록체인을 활용한 최초의 암호화폐이다.",
      answer: "O",
    },
    {
      question:
        "블록체인 기술을 활용하면 중앙 기관 없이도 신뢰를 확보할 수 있다.",
      answer: "O",
    },
    { question: "블록체인 기반 서비스는 항상 무료로 운영된다.", answer: "X" },
    {
      question: "모든 블록체인 네트워크는 동일한 합의 알고리즘을 사용한다.",
      answer: "X",
    },
    {
      question: "블록체인은 데이터의 위변조가 어렵지만 불가능한 것은 아니다.",
      answer: "O",
    },
    {
      question: "스마트 컨트랙트는 사람이 직접 실행해야 작동한다.",
      answer: "X",
    },
    {
      question: "스마트 컨트랙트는 배포 후에도 코드를 변경할 수 있다.",
      answer: "X",
    },
    {
      question: "스마트 컨트랙트는 자동으로 실행되며, 중간 개입이 필요 없다.",
      answer: "O",
    },
    {
      question: "스마트 컨트랙트가 잘못 설계되면 해킹 위험이 있다.",
      answer: "O",
    },
    {
      question: "스마트 컨트랙트를 배포하면 중앙 기관이 관리한다.",
      answer: "X",
    },
    {
      question: "스마트 컨트랙트에는 코드 감사를 거쳐야 보안이 강화된다.",
      answer: "O",
    },
    {
      question:
        "Revoke 기능을 사용하면 승인한 스마트 컨트랙트의 권한을 취소할 수 있다.",
      answer: "O",
    },
    {
      question:
        "승인된 스마트 컨트랙트는 내 자산을 무제한으로 사용할 수도 있다.",
      answer: "O",
    },
    {
      question: "스마트 컨트랙트의 코드는 누구나 열람할 수 있다.",
      answer: "O",
    },
    {
      question:
        "스마트 컨트랙트는 블록체인 위에서 자동으로 실행되는 프로그램이다.",
      answer: "O",
    },
    {
      question:
        "DeFi(탈중앙화 금융)에서는 은행 계좌 없이도 자산을 운용할 수 있다.",
      answer: "O",
    },
    {
      question: "모든 스마트 컨트랙트는 보안 감사가 완료된 후 배포된다.",
      answer: "X",
    },
    { question: "트랜잭션이 승인되면 되돌릴 수 있다.", answer: "X" },
    {
      question: "블록체인 트랜잭션은 실행 전 시뮬레이션할 수 있다.",
      answer: "O",
    },
    { question: "블록체인 지갑은 항상 암호화되어 저장된다.", answer: "O" },
    {
      question: "블록체인 지갑의 프라이빗 키를 잃어버리면 복구가 가능하다.",
      answer: "X",
    },
    {
      question:
        "블록체인에서는 동일한 주소라도 네트워크에 따라 다르게 작동할 수 있다.",
      answer: "O",
    },
    {
      question:
        "블록체인 트랜잭션을 보내면 네트워크 상태에 따라 지연될 수 있다.",
      answer: "O",
    },
    {
      question: "블록체인 지갑을 연결하면 내 자산이 자동으로 전송될 수 있다.",
      answer: "X",
    },
    {
      question:
        "시드 구문을 안전하게 보관하려면 인터넷이 연결되지 않은 곳에 저장해야 한다.",
      answer: "O",
    },
    {
      question: "NFT는 변조할 수 없는 블록체인 기술을 기반으로 한다.",
      answer: "O",
    },
    {
      question: "NFT를 구매하면 자동으로 저작권을 소유하게 된다.",
      answer: "X",
    },
    { question: "NFT는 디지털 아트만을 위한 기술이다.", answer: "X" },
    { question: "NFT는 한 번 생성되면 변경할 수 없다.", answer: "O" },
    { question: "NFT의 소유권 정보는 블록체인에 저장된다.", answer: "O" },
    { question: "NFT 거래에는 가스비가 필요할 수도 있다.", answer: "O" },
    {
      question: "NFT는 특정 마켓플레이스에서만 거래할 수 있다.",
      answer: "X",
    },
    { question: "NFT는 실제 자산과 연결될 수도 있다.", answer: "O" },
    {
      question: "NFT를 거래하면 블록체인에 거래 내역이 남는다.",
      answer: "O",
    },
    { question: "NFT 프로젝트는 항상 장기적으로 운영된다.", answer: "X" },
    {
      question: "NFT 마켓플레이스는 중앙 기관이 운영하는 경우가 많다.",
      answer: "O",
    },
    {
      question: "NFT를 구매한 후에도 해당 NFT를 웹사이트에서 숨길 수 있다.",
      answer: "O",
    },
    {
      question: "NFT 프로젝트는 Rug Pull(먹튀) 위험이 존재할 수 있다.",
      answer: "O",
    },
    {
      question:
        "NFT 민팅을 하기 전 스마트 컨트랙트 내용을 검토하는 것이 중요하다.",
      answer: "O",
    },
    { question: "NFT는 무조건 희소성이 있어야 한다.", answer: "X" },
    {
      question: "NFT는 게임, 음악, 부동산 등 다양한 분야에서 활용될 수 있다.",
      answer: "O",
    },
    {
      question:
        "NFT가 블록체인에서 영구적으로 보관된다고 해서 해당 데이터도 항상 유지되는 것은 아니다.",
      answer: "O",
    },
    {
      question: "NFT를 전송하면 트랜잭션 기록이 블록체인에 저장된다.",
      answer: "O",
    },
    {
      question: "NFT의 메타데이터는 일부 변경이 가능할 수도 있다.",
      answer: "O",
    },
    {
      question: "NFT 컬렉션의 희소성은 가격에 영향을 줄 수 있다.",
      answer: "O",
    },
    {
      question: "Web3는 기존 Web2 서비스보다 항상 더 빠르고 효율적이다.",
      answer: "X",
    },
    {
      question: "Web3에서는 개인이 데이터를 완전히 소유하고 관리할 수 있다.",
      answer: "O",
    },
    { question: "Web3는 모든 서비스를 무료로 제공한다.", answer: "X" },
    {
      question: "Web3 기반 서비스는 항상 블록체인을 필요로 한다.",
      answer: "X",
    },
    {
      question:
        "탈중앙화 애플리케이션(DApp)은 블록체인 스마트 컨트랙트를 이용한다.",
      answer: "O",
    },
    {
      question: "Web3에서는 개인이 로그인할 때 중앙 서버에 의존하지 않는다.",
      answer: "O",
    },
    {
      question: "Web3 ID는 이메일 주소 대신 블록체인 주소를 활용할 수 있다.",
      answer: "O",
    },
    {
      question: "Web3에서는 모든 트랜잭션이 공개적으로 기록된다.",
      answer: "O",
    },
    {
      question: "Web3에서는 검열이 불가능한 시스템을 구축할 수 있다.",
      answer: "O",
    },
    {
      question: "Web3 서비스는 전통적인 은행보다 항상 더 안전하다.",
      answer: "X",
    },
    {
      question: "Web3 브라우저는 기존 웹사이트를 지원하지 않는다.",
      answer: "X",
    },
    {
      question:
        "Web3 지갑을 연결하면 모든 DApp에서 동일한 계정을 사용할 수 있다.",
      answer: "O",
    },
    {
      question: "Web3는 중앙화된 데이터베이스보다 보안성이 항상 뛰어나다.",
      answer: "X",
    },
    {
      question: "Web3에서는 중앙 기관 없이 글로벌 결제가 가능하다.",
      answer: "O",
    },
    {
      question: "탈중앙화 클라우드는 Web3의 주요 개념 중 하나이다.",
      answer: "O",
    },
    {
      question: "Web3에서는 광고 없이 서비스가 운영될 수 있다.",
      answer: "O",
    },
    {
      question:
        "Web3 기반 스토리지 서비스는 블록체인에 모든 데이터를 저장한다.",
      answer: "X",
    },
    { question: "Web3에서는 소셜 미디어도 탈중앙화될 수 있다.", answer: "O" },
    {
      question:
        "Web3 프로젝트는 반드시 DAO(탈중앙화 자율 조직) 방식으로 운영해야 한다.",
      answer: "X",
    },
    {
      question:
        "Web3에서는 사용자가 직접 데이터를 수익화할 수 있는 기회가 많다.",
      answer: "O",
    },
    {
      question:
        "크로스체인은 서로 다른 블록체인 네트워크를 연결하는 기술이다.",
      answer: "O",
    },
    {
      question:
        "크로스체인 브릿지를 사용하면 가스비 없이 자산을 이동할 수 있다.",
      answer: "X",
    },
    {
      question: "크로스체인 트랜잭션은 네트워크 간 전송이므로 항상 빠르다.",
      answer: "X",
    },
    {
      question: "크로스체인 브릿지는 보안 취약점이 발생할 가능성이 있다.",
      answer: "O",
    },
    {
      question: "레이어2 솔루션은 블록체인의 확장성을 높이는 기술이다.",
      answer: "O",
    },
    {
      question:
        "레이어2 솔루션은 블록체인 메인넷과 완전히 독립적으로 작동한다.",
      answer: "X",
    },
    {
      question: "레이어2 솔루션을 사용하면 트랜잭션 속도를 향상시킬 수 있다.",
      answer: "O",
    },
    {
      question: "플라즈마(Plasma)는 대표적인 레이어2 솔루션 중 하나이다.",
      answer: "O",
    },
    {
      question: "레이어2 솔루션은 항상 이더리움 네트워크에서만 사용된다.",
      answer: "X",
    },
    {
      question: "롤업(Rollup)은 트랜잭션을 묶어 처리하는 방식이다.",
      answer: "O",
    },
    {
      question: "ZK-Rollup은 트랜잭션을 압축하여 빠르게 처리하는 기술이다.",
      answer: "O",
    },
    {
      question:
        "옵티미스틱 롤업은 트랜잭션을 처리한 후 일정 기간 동안 검증을 기다린다.",
      answer: "O",
    },
    {
      question:
        "크로스체인 브릿지를 사용하면 서로 다른 블록체인의 자산을 직접 교환할 수 있다.",
      answer: "X",
    },
    {
      question: "크로스체인 거래는 특정 중앙화 기관이 승인해야 한다.",
      answer: "X",
    },
    {
      question: "크로스체인 기술은 DeFi에서 매우 중요한 역할을 한다.",
      answer: "O",
    },
    {
      question:
        "블록체인 간 상호운용성을 높이면 Web3 서비스의 유연성이 증가한다.",
      answer: "O",
    },
    {
      question: "크로스체인 스마트 컨트랙트는 한 블록체인에서만 작동한다.",
      answer: "X",
    },
    { question: "크로스체인 기술은 NFT에도 적용될 수 있다.", answer: "O" },
    {
      question: "크로스체인 브릿지는 항상 신뢰할 수 있는 방식으로 운영된다.",
      answer: "X",
    },
    {
      question:
        "크로스체인 기술은 미래 블록체인 산업에서 필수적인 요소가 될 가능성이 높다.",
      answer: "O",
    },
    {
      question: "DAO는 스마트 컨트랙트를 기반으로 운영되는 조직이다.",
      answer: "O",
    },
    { question: "DAO는 중앙 관리자가 필요하다.", answer: "X" },
    {
      question: "DAO의 결정은 참여자들의 투표를 통해 이루어진다.",
      answer: "O",
    },
    { question: "DAO는 기존 회사보다 운영 속도가 항상 빠르다.", answer: "X" },
    {
      question:
        "DAO에서는 거버넌스 토큰을 사용하여 의사 결정을 내릴 수 있다.",
      answer: "O",
    },
    { question: "모든 DAO는 이더리움 네트워크에서만 운영된다.", answer: "X" },
    {
      question: "DAO의 거버넌스 구조는 항상 민주적으로 운영된다.",
      answer: "X",
    },
    { question: "DAO 투표는 블록체인 상에서 기록된다.", answer: "O" },
    {
      question: "DAO는 스마트 컨트랙트 코드 변경 없이 운영될 수 있다.",
      answer: "X",
    },
    { question: "DAO의 참여자는 누구나 제안할 수 있다.", answer: "O" },
    { question: "메타버스는 Web3와 밀접한 관련이 있다.", answer: "O" },
    {
      question: "메타버스는 가상 현실(VR) 없이도 구현될 수 있다.",
      answer: "O",
    },
    {
      question:
        "블록체인 기반 메타버스에서는 NFT를 이용한 자산 소유가 가능하다.",
      answer: "O",
    },
    {
      question: "메타버스에서는 모든 데이터가 중앙 서버에 저장된다.",
      answer: "X",
    },
    {
      question: "메타버스에서 사용되는 토큰은 실제 가치를 가질 수도 있다.",
      answer: "O",
    },
    {
      question:
        "메타버스 플랫폼은 기존 소셜 미디어보다 더 높은 자유도를 제공할 수 있다.",
      answer: "O",
    },
    {
      question: "모든 메타버스는 동일한 블록체인 네트워크에서 운영된다.",
      answer: "X",
    },
    {
      question: "메타버스는 게임과 엔터테인먼트 분야에서만 활용된다.",
      answer: "X",
    },
    {
      question:
        "블록체인 기반 메타버스에서는 탈중앙화 금융(DeFi)도 접목될 수 있다.",
      answer: "O",
    },
    {
      question: "메타버스의 발전은 Web3 기술의 확산과 밀접한 관계가 있다.",
      answer: "O",
    },
    {
      question:
        "CBDC(중앙은행 디지털 화폐)는 블록체인 기술을 활용할 수 있다.",
      answer: "O",
    },
    {
      question: "CBDC는 기존 암호화폐와 동일한 방식으로 운영된다.",
      answer: "X",
    },
    { question: "비트코인은 스마트 컨트랙트를 실행할 수 있다.", answer: "X" },
    {
      question:
        "솔라나(Solana)는 높은 트랜잭션 속도를 제공하는 블록체인이다.",
      answer: "O",
    },
    {
      question: "Polkadot은 크로스체인을 위한 블록체인 프로젝트이다.",
      answer: "O",
    },
    { question: "비트코인은 100% 익명성을 제공한다.", answer: "X" },
    {
      question:
        "블록체인 보안 사고의 대부분은 스마트 컨트랙트 취약점 때문이다.",
      answer: "O",
    },
    {
      question:
        "Layer 0은 블록체인 네트워크 간의 연결성을 담당하는 계층이다.",
      answer: "O",
    },
    { question: "NFT 피싱 사기는 존재하지 않는다.", answer: "X" },
    { question: "비트코인은 화폐 공급량이 무제한이다.", answer: "X" },
    {
      question: "이더리움의 전환된 합의 알고리즘은 Proof of Stake(PoS)이다.",
      answer: "O",
    },
    {
      question: "스마트 컨트랙트 코드에 오류가 있으면 되돌릴 수 없다.",
      answer: "O",
    },
    {
      question: "비트코인의 총 공급량은 2,100만 개로 제한되어 있다.",
      answer: "O",
    },
    {
      question:
        "51% 공격이란 네트워크의 과반수를 장악하여 트랜잭션을 조작하는 것이다.",
      answer: "O",
    },
    { question: "NFT는 반드시 중앙 서버에 저장되어야 한다.", answer: "X" },
    {
      question: "블록체인에서는 이중 지불(double spending)이 발생할 수 없다.",
      answer: "O",
    },
    {
      question: "하드웨어 지갑은 온라인 상태에서도 안전하게 사용할 수 있다.",
      answer: "X",
    },
    {
      question:
        "Etherscan과 같은 블록체인 탐색기를 사용하면 트랜잭션을 추적할 수 있다.",
      answer: "O",
    },
    {
      question: "블록체인 기술은 게임 산업에서도 활용되고 있다.",
      answer: "O",
    },
    {
      question: "Web3에서는 P2E(Play to Earn) 모델이 가능하다.",
      answer: "O",
    },
    {
      question: "블록체인 네트워크가 다운되면 자산도 영구적으로 사라진다.",
      answer: "X",
    },
    {
      question: "DAO(탈중앙화 자율 조직)의 의사 결정은 모두 자동화되어 있다.",
      answer: "X",
    },
    { question: "NFT를 민팅할 때마다 새로운 블록이 생성된다.", answer: "X" },
    {
      question:
        "블록체인에서는 프라이빗 키를 복구할 수 있는 방법이 존재한다.",
      answer: "X",
    },
    {
      question:
        "레이어2 솔루션을 사용하면 이더리움 네트워크의 가스비를 절감할 수 있다.",
      answer: "O",
    },
    { question: "NFT는 크로스체인 거래가 가능하다.", answer: "O" },
    {
      question: "블록체인 주소는 숫자와 문자로 이루어진 고유한 식별자이다.",
      answer: "O",
    },
    {
      question: "블록체인의 탈중앙화는 모든 보안 문제를 해결할 수 있다.",
      answer: "X",
    },
    {
      question: "미래에는 Web3 기술이 Web2를 완전히 대체할 가능성이 있다.",
      answer: "O",
    },
  ];

  this.capitalCityQuestions = [
    { country: "프랑스", capital: "파리", correct: "O" },
    { country: "독일", capital: "베를린", correct: "O" },
    { country: "이탈리아", capital: "마드리드", correct: "X" },
    { country: "스페인", capital: "바르셀로나", correct: "X" },
    { country: "영국", capital: "런던", correct: "O" },
    { country: "네덜란드", capital: "암스테르담", correct: "O" },
    { country: "벨기에", capital: "브뤼셀", correct: "O" },
    { country: "포르투갈", capital: "리스본", correct: "O" },
    { country: "스위스", capital: "취리히", correct: "X" },
    { country: "덴마크", capital: "오슬로", correct: "X" },
    { country: "노르웨이", capital: "헬싱키", correct: "X" },
    { country: "스웨덴", capital: "스톡홀름", correct: "O" },
    { country: "핀란드", capital: "코펜하겐", correct: "X" },
    { country: "아이슬란드", capital: "레이캬비크", correct: "O" },
    { country: "러시아", capital: "상트페테르부르크", correct: "X" },
    { country: "폴란드", capital: "바르샤바", correct: "O" },
    { country: "체코", capital: "프라하", correct: "O" },
    { country: "오스트리아", capital: "비엔나", correct: "O" },
    { country: "헝가리", capital: "부다페스트", correct: "O" },
    { country: "그리스", capital: "아테네", correct: "O" },
    { country: "터키", capital: "이스탄불", correct: "X" },
    { country: "이집트", capital: "카이로", correct: "O" },
    { country: "남아프리카공화국", capital: "케이프타운", correct: "X" },
    { country: "나이지리아", capital: "아부자", correct: "O" },
    { country: "케냐", capital: "나이로비", correct: "O" },
    { country: "브라질", capital: "리우데자네이루", correct: "X" },
    { country: "아르헨티나", capital: "부에노스아이레스", correct: "O" },
    { country: "칠레", capital: "산티아고", correct: "O" },
    { country: "캐나다", capital: "토론토", correct: "X" },
    { country: "멕시코", capital: "멕시코시티", correct: "O" },
    { country: "미국", capital: "뉴욕", correct: "X" },
    { country: "호주", capital: "시드니", correct: "X" },
    { country: "뉴질랜드", capital: "웰링턴", correct: "O" },
    { country: "중국", capital: "베이징", correct: "O" },
    { country: "일본", capital: "오사카", correct: "X" },
    { country: "대한민국", capital: "서울", correct: "O" },
    { country: "북한", capital: "평양", correct: "O" },
    { country: "인도", capital: "뉴델리", correct: "O" },
    { country: "파키스탄", capital: "카라치", correct: "X" },
    { country: "태국", capital: "방콕", correct: "O" },
    { country: "베트남", capital: "호찌민", correct: "X" },
    { country: "필리핀", capital: "마닐라", correct: "O" },
    { country: "인도네시아", capital: "자카르타", correct: "O" },
    { country: "말레이시아", capital: "쿠알라룸푸르", correct: "O" },
    { country: "사우디아라비아", capital: "리야드", correct: "O" },
    { country: "이란", capital: "테헤란", correct: "O" },
    { country: "이라크", capital: "바그다드", correct: "O" },
    { country: "이스라엘", capital: "텔아비브", correct: "X" },
    { country: "카자흐스탄", capital: "아스타나(누르술탄)", correct: "O" },
    { country: "몽골", capital: "울란바토르", correct: "O" },
  ];
}