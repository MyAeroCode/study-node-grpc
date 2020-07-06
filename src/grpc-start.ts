async function start() {
    try {
        /**
         * 두 자리 정수로 변환한다.
         */
        function formatNumber(num: number): string {
            const prefix = num < 10 ? "0" : "";
            return prefix + num;
        }

        /**
         * 두자리 챕터 번호
         */
        const chapter = formatNumber(Number(process.argv[2]));

        /**
         * 서버 또는 클라이언트 구분.
         */
        const type = process.argv[3] === "server" ? "server" : "client";

        /**
         * 실행할 모듈의 상대 경로.
         */
        const targetModulePath = `./${chapter}/grpc-${type}`;

        /**
         * 실행할 모듈의 export default 값.
         */
        const { default: startModule } = await import(targetModulePath);

        startModule();
    } catch (e) {
        console.error(e);
    }
}
start();
