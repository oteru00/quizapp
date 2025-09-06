const quizData = [
    {
        question: "Reactでコンポーネントを定義するときによく使う構文は？",
        options: ["HTML", "JavaScript関数", "CSS", "JSON"],
        answerIndex: 1
    },
    {
        question: "Reactで状態管理に使うフックはどれ？",
        options: ["useEffect", "useState", "useContext", "useMemo"],
        answerIndex: 1
    },
    {
        question: "JSXとは何の略？",
        options: [
            "Java Syntax Extension",
            "JavaScript XML",
            "JSON Syntax eXtended",
            "JavaScript eXpression"
        ],
        answerIndex: 1
    },
    {
        question: "Reactで仮想DOMを使う目的は？",
        options: [
            "SEO対策のため",
            "DOM操作を高速化するため",
            "データベース操作を簡単にするため",
            "CSSを適用するため"
        ],
        answerIndex: 1
    },
    {
        question: "React Routerでページ遷移に使うコンポーネントは？",
        options: ["<Switch>", "<Route>", "<Link>", "<Form>"],
        answerIndex: 2
    },
    {
        question: "propsの正しい説明は？",
        options: [
            "コンポーネントの状態を保存するもの",
            "親コンポーネントから子コンポーネントへ渡すデータ",
            "Reactのライフサイクル関数",
            "スタイルを当てるための属性"
        ],
        answerIndex: 1
    },
    {
        question: "useEffectフックの主な用途は？",
        options: [
            "スタイルを適用する",
            "副作用（データ取得やDOM操作など）を処理する",
            "状態を初期化する",
            "ルーティングを制御する"
        ],
        answerIndex: 1
    },
    {
        question: "Reactでリストを描画するときに必須の属性は？",
        options: ["id", "key", "className", "value"],
        answerIndex: 1
    },
    {
        question: "ReactのStrictModeの役割は？",
        options: [
            "アプリを高速化する",
            "バグや非推奨な書き方を検出する",
            "CSSを強制適用する",
            "状態を永続化する"
        ],
        answerIndex: 1
    },
    {
        question: "Reactで状態を親から子に渡すときに使うのは？",
        options: ["props", "context", "state", "ref"],
        answerIndex: 0
    }
];

export default quizData;
