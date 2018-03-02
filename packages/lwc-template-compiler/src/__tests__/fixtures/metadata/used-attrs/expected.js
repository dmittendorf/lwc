export default function tmpl($api, $cmp, $slotset, $ctx) {
    const { d: api_dynamic, h: api_element } = $api;

    return [
        api_element(
            'section',
            {
                key: 2
            },
            [
                api_element(
                    'p',
                    {
                        key: 1
                    },
                    [
                        api_dynamic($cmp.obj.sub)
                    ]
                )
            ]
        )
    ];
}