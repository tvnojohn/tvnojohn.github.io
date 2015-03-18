#! ruby -Ku
# 文字コードの設定
require "kconv"

str = <<"John"
英語っていいな
    かっこいいな
        英語を言えたらスーパースター
John

print(%Q(Hello!My name is John!\n))
print(<<"Aho")
I'm #{2015 - 1993} old.`
Aho
print(str)
         
         
# print(Kconv.tosjis("日本語の表示"))
print("日本語の表示");

#こめんと

=begin
これもこめんと
=end