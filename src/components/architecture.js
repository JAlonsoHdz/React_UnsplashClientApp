import React from 'react';

const Architecture = () => { 
    var iFrame = {
        width: "100%",
        height: "613px",
    };

    return(
        <iframe frameborder="0" style={iFrame} src="https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Unsplash%20app#R5Vvfc%2BI2EP5reITxb8wjJOFy09xMeun1ek8dYcu2GmN5ZJFA%2FvqusGRsywTSmHBc8wBoLcnyft%2BudtfKwL5arj8xlCdfaIjTgWWE64F9PbCsie%2FApxBsSoE5NqQkZiSUsp3ggbxgKTSkdEVCXDQ6ckpTTvKmMKBZhgPekCHG6HOzW0TT5l1zFGNN8BCgVJd%2BJyFPSqnvGjv5LSZxou5sGvLKEqnOUlAkKKTPNZF9M7CvGKW8%2FLVcX%2BFUKE%2FppRw333O1WhjDGT9mQP77nVf8lm7Mb38m%2BDFz7owpHjpuOc0TSlfyieVq%2BUapgNFVFmIxizmwZ4gFEiWAyJ6FqEiqawVn9BFf0ZSy7VA7igz4gysRSVMlz2gGw2cxQyGBtbfEYsJ7xDlmGQh9WIpTzawQAN3N5Lox43i9VyNmpWcgKKZLzNkGuqgBcoTipmGX7eca0ArOpAayPRlLgklyxdXUO%2F3DDwnBG%2BBQK6ppH4fAR9mkjCc0phlKb3bS2Q4foemEL1MJxz%2BY840EC604BdFuhjtKc9mvvKe40euKhHXRFQvwKw8g2cMRizF%2FjXfdwDCcIk6emuvo0vJ26JQxtKl1yCnJeFGb%2BV4Idng7ttEA3DJaFtPub7zaH36UK9jhXT3Kf6eA5fVJAQCQbf4S8pGrmj9kt23jet1obWTrWOrgNeG16aH1o3ZlN7loqLnPQDf7Eujmjs9Bt%2FGJ6OY4doNwI8M9wLlt6x4zAs%2BE2RuJeDypDpLF64MsB9lg%2BkZzipLsctQO9lOzbmzZH886tcbLcHJncFjuJTgs2CDP4LC0gHWa5wPLS0GdswWDXzGvMNsbxT4nhOOHHG3BeobUpcmoergKYWyIsB8FXQGuF%2Fh4EfUTjtot%2F28qOGrxqGl1xKOusZ8I7wpHbU3XDxji%2F%2BQCleuaLa4eq1zvVMp1NOV%2BwdnqAlVrt93A2VWrJ7VCtTOUZRBXXJ6Cq1Dhp1Gw6fxP92%2FvyP17%2FM79%2B13oeBr9Py9RjIsLpL7XzonOTv1xt3KvEAt%2FAf3a7rn1a%2FWaGhxdx9jjgswDLqhH12JOjvQtvRQzOqoPbpMJRgvhcl1aftpXXK8evyPYNDhmSzE%2By1e8K9Q%2FGPyDgfAmMRguyAtabDsIIGVuBL3d2cC9FoVuoEshK92imZJYVKRTHImphNWRAKVTKeaCSrMCrJtk8R9bXg2dvkLXFjJOh42aHTZqn8xG9cRAN9osnIr3L9AKUlQUJNiz6ZuDRpnoUJWoR4uz3SMtzurGp6Z%2F95W07J2G6fl%2BA36zbZh7Cke6hTtNHpmu%2B6EWbrnn8OzH8%2BUwDXp5a6GXXawWLh9UGVT32fv6443loHaW8iHVID2LnsKeAYFWwFcMa4R7T0QWRdgLOiOycDxZGEY%2F3t762QJe29Q3Zo44jlZiaECXOc2wZOZlBb8tVTvWkap2TqZqq1vVKS6Kk%2Bn6LLSuap3n0%2FURJx%2BqIxuNkw6tjaipNnmKoaXjm7k%2Ft0TnFC1weg9xJSdUhI0BqE%2B866riybtWhwXlnC73BpwqKq3moSuekgyWo47DiNXCc%2BTikZbrWJzSGT1hjJYjKxxBFMzBjv9GOSl6SihbxUDbGrka0o4z8jugrqT9g62XRL5lRQ5xqUgviEjg4Xt6%2F1mjwEVnDl6r6O0cZ3PWyWzOP8rmtlwtQWlovltzBy1na3MzFDzGWzfZcH3iD7psbzYt8p3JINWIyFpY%2FUyu5zrhXBw9mwpNWPMgzMwRCWgWEXDAbAQuGqQh4gi%2BhLyQ3y9oGBAWpHhY0IAgUNXcc8THZGx45jAmPFkthqblj%2FIsHnQemOqBEO1K8nCiH3lSojojlKx%2FRuhZ%2F%2BUzwjnIiJwEfJPjYcQwHj7BtJQN1TUTfNW82GTB6dnQcg%2FDjgDI73DU%2FqnctNo7amy4x6wQGR1IPxGRbHzFOf21vLQ1bp7AGLoT3U931XdO5qcdPeS%2FxRDl6G8nNaOoQZDXjvJI0mrhyv4IS1l7RDOuDpxaNasjyxieLSUL8YRFgGADn3%2FHi1tacEBoVDydzm5aebHrndeHKpdZQwsUIXDC7IkEIrIBIotpVgWoRixhTaj%2BNuh8RsQoZDmljxZHg3oByZlUkaeqd5gdOcf4Q%2B1Kr1aUdjUE33a7EpjpxWyxFSSMZoDEVkc%2FD2x9%2BL7WEVtz3JEumJ2HsE8Gkp4rVKAoTL5iFPBmRm4kBDPxvmKjesPdF7%2FmGwm7XUk%2BoWVBc%2Fc%2FEmXZcPefJvbNvw%3D%3D"></iframe>
    );
}

export default Architecture;

