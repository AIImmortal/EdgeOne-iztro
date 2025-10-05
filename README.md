# EdgeOne-iztro
EdgeOne托管iztro紫微排盘API示例

## 测试代码

```bash
curl --location 'https://eo-iztro.xuanxue.club/ziweipan' \
--header 'Content-Type: application/json' \
--data '{
    "BirthDate": "2000-1-1",
    "BirthTime": 2,
    "Gender": "女"
}'
```