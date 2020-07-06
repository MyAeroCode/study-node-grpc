import shell from "shelljs";

async function build() {
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
        const chapterNumber = formatNumber(Number(process.argv[2]));

        /**
         * 모듈이 설치된 폴더의 절대경로
         */
        const absoluteModulesPath = `${__dirname}\\..\\node_modules`;

        /**
         * 프로토파일이 저장된 폴더의 상대경로
         */
        const relatvieProtoPath = `.\\src\\${chapterNumber}\\proto`;

        /**
         * 프로토파일 컴파일 스크립트
         */
        const protocScript = `
            .\\node_modules\\grpc-tools\\bin\\protoc \
                --proto_path="${relatvieProtoPath}" \
                --plugin="protoc-gen-grpc=${absoluteModulesPath}/grpc-tools/bin/grpc_node_plugin.exe" \
                --plugin="protoc-gen-ts=${absoluteModulesPath}/ts-protoc-gen/bin/protoc-gen-ts.cmd" \
                --js_out="import_style=commonjs,binary:${relatvieProtoPath}" \
                --ts_out="service=grpc-node:${relatvieProtoPath}" \
                --grpc_out="${relatvieProtoPath}" \
               ${relatvieProtoPath}/schema.proto
        `.trim();

        shell.exec(protocScript, function (code, stdout, stderr) {
            if (code !== 0) {
                console.log(`err!`);
                console.log(`code : ${code}`);
                console.log(`stderr : ${stderr}`);
            } else {
                console.log(`done.`);
            }
        });
    } catch (e) {
        console.error(e);
    }
}
build();
