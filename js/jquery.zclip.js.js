
原文
// PHP style object + method, i.e. [myObject, 'myMethod']
翻訳を改善する
/ *
 * zClip :: jQueryのZeroClipboard V1.1.1
 * http://steamdev.com/zclip
 *
 *著作権2011、SteamDev
 * MITライセンスの下でリリース。
 * http://www.opensource.org/licenses/mit-license.php
 *
 *日付：水曜日2011年6月1日
 * /


（関数（$）{

    $ .fn.zclip =関数（paramsは）{

        場合（typeof演算のparams == "オブジェクト" &&！params.length）{

            VAR設定= $ .extend（{

                パス：「ZeroClipboard.swf」、
                コピー：ヌル、
                beforeCopy：ヌル、
                afterCopy：ヌル、
                clickAfter：trueの場合、
                setHandCursor：trueの場合、
                setCSSEffects：真

            }、paramsは）;
			

            this.each（関数（）{返します

                VAR 0 = $（この）。

                場合（o.is（ '：可視'）&&（typeof演算のsettings.copy == '列' || $ .isFunction（settings.copy）））{

                    ZeroClipboard.setMoviePath（settings.path）。
                    VARクリップ=新しいZeroClipboard.Client（）;
                    
                    IF（$。isFunction（settings.copy））{
                    	o.bind（ 'zClip_copy'、settings.copy）。
                    }
                    IF（$。isFunction（settings.beforeCopy））{
                    	o.bind（ 'zClip_beforeCopy'、settings.beforeCopy）。
                    }
                    IF（$。isFunction（settings.afterCopy））{
                    	o.bind（ 'zClip_afterCopy'、settings.afterCopy）。
                    }                    

                    clip.setHandCursor（settings.setHandCursor）。
                    clip.setCSSEffects（settings.setCSSEffects）。
                    clip.addEventListener（ 'のmouseOver'、機能（クライアント）{
                        o.trigger（ 'のMouseEnter'）;
                    }）;
                    clip.addEventListener（ 'マウスアウト'、機能（クライアント）{
                        o.trigger（ 'mouseleave'）;
                    }）;
                    clip.addEventListener（ 'mouseDownイベント」、機能（クライアント）{

                        o.trigger（「マウスダウン '）;
                        
			場合（！$。isFunction（settings.copy））{
			   clip.setText（settings.copy）。
			}他{
			   clip.setText（o.triggerHandler（ 'zClip_copy'））;
			}                        
                        
                        IF（$ .isFunction（settings.beforeCopy））{
                            o.trigger（ 'zClip_beforeCopy'）;                            
                        }

                    }）;

                    clip.addEventListener（「完全」、関数（クライアント、テキスト）{

                        IF（$ .isFunction（settings.afterCopy））{
                            
                            o.trigger（ 'zClip_afterCopy'）;

                        }他{
                            場合（text.length> 500）{
                                テキスト= text.substr（0、500）+ "... \ N \ N（" +（text.length  -  "の文字が表示されていない500）+）」。
                            }
							
			    o.removeClass（ 'ホバー'）;
                            アラート（「コピーしたテキストをクリップボードに：\ N \ N "+テキスト）。
                        }

                        {（settings.clickAfter）の場合
                            o.trigger（ 'クリック'）;
                        }

                    }）;

					
                    clip.glue（○、[0]、o.parent（）、[0]）;
					
		    $（ウィンドウ）.bind（「ロード·サイズ変更」、関数（）{clip.reposition（）;}）;
					

                }

            }）;

        }他の場合（typeof演算のparams == "文字列"）{

            this.each（関数（）{返します

                VAR 0 = $（この）。

                paramsは= params.toLowerCase（）;
                VAR zclipId = o.data（ 'zclipId'）;
                VAR clipElm = $（ '＃' + zclipId + '.zclip'）;

                場合（paramsは== "削除"）{

                    clipElm.remove（）。
                    o.removeClass（「アクティブホバー '）;

                }それ以外であれば（paramsは== "非表示"）を{

                    clipElm.hide（）。
                    o.removeClass（「アクティブホバー '）;

                }他の場合（paramsは== "ショー"）{

                    clipElm.show（）。

                }

            }）;

        }

    }	
	
	

}）（jQueryの）;







// ZeroClipboard
//簡単なセットのクリップボードシステム
//著者：ジョセフHuckaby
VAR ZeroClipboard = {

    バージョン： "1.0.7」、
    クライアント：{}、
    // IDによってインデックスを付け、ページのアップロードクライアントを登録
    moviePath： "ZeroClipboard.swf」、
    //ムービーへのURL
    NEXTID：1、
    //次の映画のID
    $ます。function（ブツ）{
        //単純なDOMルックアップユーティリティ機能
        場合（typeof演算（ブツ）== '文字列'）ブツ=のdocument.getElementById（ブツ）。
        場合（！thingy.addClass）{
            //いくつかの便利なメソッドを持つ要素を拡張
            thingy.hide =関数（）{
                this.style.display = 'なし';
            };
            thingy.show =関数（）{
                this.style.display = '';
            };
            thingy.addClass =関数（名）{
                this.removeClass（名）;
                this.className + = '' +名;
            };
            thingy.removeClass =関数（名）{
                VARクラス= this.className.split（/ \ S + /）;
                varの各IDX = -1;
                用（VARのはk = 0; K <classes.length; ++ K）{
                    場合（クラス【K] ==名）{
                        IDX = K;
                        K = classes.length。
                    }
                }
                （IDX> -1）の場合{
                    classes.splice（IDX、1）;
                    this.className = classes.join（ ''）;
                }
                これを返します。
            };
            thingy.hasClass =関数（名）{
                !! this.className.match（新しい正規表現（ "\\だ*" +名+ "\\ S *"）を）返します。
            };
        }
        ブツを返します。
    }、

    setMoviePath：関数（パス）{
        // ZeroClipboard.swfのパスを設定します
        this.movi​​ePath =パス。
    }、

    ディスパッチ：関数（ID、イベント名、引数）{
        //クライアントへ送信し、Flashムービーからのイベントを受け取ります		
        VARクライアント= this.clients [ID];
        場合（クライアント）{
            client.receiveEvent（イベント名、引数）;
        }
    }、

    登録：関数（ID、クライアント）{
        //イベントを受け取るために、新しいクライアントを登録
        this.clients [ID] =クライアント。
    }、

    getDOMObjectPosition：関数（OBJ、stopObj）{
        // DOM要素の絶対座標を取得
        VAR情報= {
            左：0、
            トップ：0、
            幅：obj.width？obj.width：obj.offsetWidth、
            高さ：obj.height？obj.height：obj.offsetHeight
        };

        場合（OBJ &&（OBJ！= stopObj））{
			info.left + = obj.offsetLeft。
            info.top + = obj.offsetTop。
        }

        情報を返します。
    }、

    クライアント：関数（ELEM）{
        //新しい簡単なアップロードのクライアントのコンストラクタ
        this.handlers = {};

        //一意なID
        this.id = ZeroClipboard.nextId ++;
        this.movi​​eId = 'ZeroClipboardMovie_' + this.id。

        //フラッシュ·イベントを受信するためにシングルトンでクライアントを登録
        ZeroClipboard.register（this.id、この）。

        //ムービーを作成
        場合（ELEM）this.glue（elemは）;
    }
};

ZeroClipboard.Client.prototype = {

    ID：0、
    //私たちのために一意のID
    準備：偽、
    //ムービーがイベントを受信する準備ができているか否か
    映画：ヌル、
    //ムービーオブジェクトへの参照
    clipText： ''、
    //テキストをクリップボードにコピーします
    handCursorEnabled：trueの場合、
    //ハンドカーソル、またはデフォルト·ポインタ·カーソルを表示するかどうか
    cssEffects：trueの場合、
    // DOMコンテナのCSSマウス効果を有効にします
    ハンドラ：ヌル、
    //ユーザイベントハンドラ
    のり：関数（ELEM、appendElem、stylesToAdd）{
        // DOM要素への接着剤
        // ELEMは、IDまたは実際のDOM要素のオブジェクトにすることができます
        this.domElement = ZeroClipboard $（ELEM）。

        のDOMエレメントをセットされていない場合だけ、オブジェクト、またはのZIndex 99浮い//
        VARのZIndex = 99;
        {（this.domElement.style.zIndex）の場合
            のZIndex = parseIntは（this.domElement.style.zIndex、10）+ 1;
        }

        場合（typeof演算（appendElem）== '文字列'）{
            appendElem = ZeroClipboard $（appendElem）。
        }それ以外であれば（typeof演算（appendElem）== '未定義'）{
            appendElem = document.getElementsByTagName（ '体'）[0];
        }

        // DOMELEMENTのX / Y位置を見つけます
        VARボックス= ZeroClipboard.getDOMObjectPosition（this.domElement、appendElem）。

        //要素の上浮動DIVを作成
        this.div = document.createElement（ 'DIV'）;
        this.div.className = "zclip";
        this.div.id = "zclip-" + this.movi​​eId。
        $（this.domElement）.dataセクション（ 'zclipId'、 'zclip-' + this.movi​​eId）。
        VARスタイル= this.div.style。
        style.position = '絶対';
        style.left = '' + box.left + 'PX';
        style.top = '' + box.top + 'PX';
        style.width = '' + box.width + 'PX';
        style.height = '' + box.height + 'PX';
        style.zIndex =のZIndex。

        場合（typeof演算（stylesToAdd）== 'オブジェクト'）{
            （stylesToAddでaddedStyle）{のために
                スタイル【addedStyle] = stylesToAdd [addedStyle];
            }
        }

        // style.backgroundColor = '＃のF00'; //デバッグ
        appendElem.appendChild（this.div）。

        this.div.innerHTML = this.getHTML（box.width、box.height）。
    }、

    getHTML：関数（幅、高さ）{
        映画の//戻りHTML
        VAR HTML = '';
        VARのFlashVars = 'ID =' + this.id + '＆幅=' +幅+ '＆高さ=' +高さ;

        場合（navigator.userAgent.match（/ MSIE /））{
            // IEがOBJECTタグを取得します
            VARプロトコル= location.href.match（/ ^ HTTPS / I）？「https：//に '：'のhttp：// ';
            HTML + = '<オブジェクトのclassid = "CLSID：d27cdb6e-ae6d-11CF-96b8-444553540000「コードベース="' +プロトコル+ 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9 、0,0,0 "幅=" '+幅+' "高さ=" "ID =" '+ this.movi​​eId +' '+ +高さは「中」>の<param名= "のallowScriptAccess"値 "=を揃えます" = "常に" />の<param名= "allowFullScreen"値= "false"を/>の<param名= "映画"値= "'+ ZeroClipboard.movi​​ePath +'" />の<param名=「ループ」の値= "偽 "/>の<param名="メニュー "値=" false "を/>の<param名="品質 "値="最高の "/>の<param名=" BGCOLOR "値="＃のFFFFFF "/>の<param名=が "flashvars"の値= "'+のFlashVars +'" />の<param名= "wmodeを"値= "透明" /> </オブジェクト> ';
        }他{
            //すべてのほかのブラウザは、EMBEDタグを取得します
            HTML + = '<埋め込みID = "' + this.movi​​eId + '" SRC = "' + ZeroClipboard.movi​​ePath +」「ループ=" false "のメニュー=" false "の質="最高 "BGCOLOR ="＃FFFFFF "幅= "'+幅+'"高さ= "'+高さ+'"名前= "'+ this.movi​​eId +'" ALIGN = "中"のallowScriptAccess = "常に" allowFullScreen = "false"をタイプ= "アプリケーション/ x軸衝撃波フラッシュ "PLUGINSPAGE =" http://www.macromedia.com/go/getflashplayerが "flashvars =" '+のFlashVars +」」のwmode = "透明" />';
        }
        HTMLを返します。
    }、

    非表示：関数を（）{
        //一時的にオフスクリーンフローターを隠します
        {（this.div）の場合
            this.div.style.left = '-2000px';
        }
    }、

    ショー：関数（）{
        //（非表示にするには、呼び出しの後に自分自身を示しています）
        this.reposition（）。
    }、

    破壊：関数（）{
        //破壊制御とフローター
        {（this.domElement && this.div）の場合
            this.hide（）。
            this.div.innerHTML = '';

            VAR本体= document.getElementsByTagName（ '体'）[0];
            {しよう
                body.removeChild（this.div）。
            }キャッチ（電子）{;
            }

            this.domElement = NULL;
            this.div = NULL;
        }
    }、

    整復：関数（ELEM）{
        //新しいコンテナに、必要に応じて、私たちの浮動DIVの位置を変更します
        //警告：サイズを​​変更することはできませんコンテナ、位置のみ
        {（ELEM）の場合
            this.domElement = ZeroClipboard $（ELEM）。
            場合this.hide（）（this.domElement！）。
        }

        {（this.domElement && this.div）の場合
            VARボックス= ZeroClipboard.getDOMObjectPosition（this.domElement）。
            VARスタイル= this.div.style。
            style.left = '' + box.left + 'PX';
            style.top = '' + box.top + 'PX';
        }
    }、

    のsetText：関数（をnewText）{
        //セットテキストがクリップボードにコピーします
        this.clipText =をnewText。
        場合（this.ready）{
            this.movi​​e.setText（をnewText）;
        }
    }、

    addEventListenerを：関数（イベント名、FUNC）{
        イベントのユーザイベントリスナーを追加//
        //イベントの種類：負荷、queueStart、fileStart、fileComplete、queueComplete、進捗状況、エラー、キャンセル
        イベント名= eventName.toString（）toLowerCaseメソッド（）を置き換える（、/ ^ /上で ''）。。;
        場合（！this.handlers [イベント名]）{
            this.handlers [イベント名] = [];
        }
        this.handlers【イベント名】.push（FUNC）。
    }、

    setHandCursor：関数（有効）{
        //ハンドカーソル（真）を有効にするか、デフォルトの矢印カーソル（偽）
        有効= this.handCursorEnabled。
        場合（this.ready）{
            this.movi​​e.setHandCursor（有効）。
        }
    }、

    setCSSEffects：関数（有効）{
        // DOMコンテナのCSS効果を有効または無効にします
        this.cssEffects = !! 有効;
    }、

    たreceiveEvent：関数（イベント名、引数）{
        //フラッシュからのイベントを受け取ります
        イベント名= eventName.toString（）toLowerCaseメソッド（）を置き換える（、/ ^ /上で ''）。。;

        //特定のイベントのための特別な行動
        スイッチ（イベント名）{
        ケース「ロード」：
            //映画は、それが準備ができていると主張するが、IEで、これは必ずしもそうではありません...
            //バグ修正：伝統的な関数を使用する必要があり、FirefoxでのEMBED DOM要素を拡張することはできません
            this.movi​​e =のdocument.getElementById（this.movi​​eId）。
            場合（！をthis.movi​​e）{
                VARの自己=この;
                setTimeoutメソッド（関数（）{
                    self.receiveEvent（ 'ロード'、NULL）;
                }、1）;
                返します。
            }

            // PC上のFirefoxは、特定の場合に、これらを設定するために「キック」が必要
            場合（！this.ready && navigator.userAgent.match（/ Firefoxの/）&& navigator.userAgent.match（/ Windowsの/））{
                VARの自己=この;
                setTimeoutメソッド（関数（）{
                    self.receiveEvent（ 'ロード'、NULL）;
                }、100）。
                this.ready =はtrue。
                返します。
            }

            this.ready =はtrue。
            {しよう
                this.movi​​e.setText（this.clipText）。
            }キャッチ（e）の{}
            {しよう
                this.movi​​e.setHandCursor（this.handCursorEnabled）。
            }キャッチ（e）の{}
            破ります;

        ケース「マウスオーバー」：
            {（this.domElement && this.cssEffects）の場合
                this.domElement.addClass（ 'ホバー'）;
                {（this.recoverActive）の場合
                    this.domElement.addClass（ 'アクティブ'）;
                }


            }


            破ります;

        ケース「マウスアウト '：
            {（this.domElement && this.cssEffects）の場合
                this.recoverActive = falseは、
                {（）this.domElement.hasClass（「アクティブ」）の場合
                    this.domElement.removeClass（ 'アクティブ'）;
                    this.recoverActive =はtrue。
                }
                this.domElement.removeClass（ 'ホバー'）;

            }
            破ります;

        ケース「マウスダウン」：
            {（this.domElement && this.cssEffects）の場合
                this.domElement.addClass（ 'アクティブ'）;
            }
            破ります;

        ケース 'のmouseup'：
            {（this.domElement && this.cssEffects）の場合
                this.domElement.removeClass（ 'アクティブ'）;
                this.recoverActive = falseは、
            }
            破ります;
        }イベント名を切り替える//
        場合（this.handlers【イベント名]）{
            用（varの各IDX = 0、LEN = this.handlers【イベント名】.LENGTH; IDX <LEN; IDX ++）、{
                VARのFUNC = this.handlers [イベント名] [IDX];

                場合（typeof演算（FUNC）== '関数'）{
                    //実際の関数のリファレンス
                    FUNC（この、引数）;
                }他の場合（（typeof演算（FUNC）== 'オブジェクト'）&&（func.length == 2））{
                    // PHPスタイルオブジェクト+方法、即ち、[myObjectという、 "MyMethodは」]
                    FUNC [0] [FUNC [1]]（この、引数）;
                }他の場合（typeof演算（FUNC）== '文字列'）{
                    関数の//名前
                    ウィンドウ[FUNC]（この、引数）;
                }
            定義された} //のforeachイベントハンドラ
        イベントの} //ユーザー定義のハンドラー
    }

};	
