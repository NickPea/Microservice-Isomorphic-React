//

import { config } from "../config";

interface types {
	lang?: string;
	head?: string;
	styles?: string;
	render?: string;
	state?: any;
	bundle?: string;
}

export const template = (props: types) => {
	return `
        <!DOCTYPE html>
        <html lang="${props.lang}"}>
        <head>
            ${props.head}
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${props.styles}
        </head>
        <body>
            <div id="${config.ROOT_ELEMENT_ID}">${props.render}</div>
            
            <script>
                window["${config.SERVER_STATE_WINDOW_KEY}"] = JSON.parse('${
		JSON.stringify(props.state) || null
	}');
			</script>

			<script src="${props.bundle || null}"></script>
			
		</body>
		</html>
    `;
};
