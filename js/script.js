// オプションを指定してSkipprの実行
$(".theTarget").skippr({
  // スライドショーの変化（"fade" or "slide"）
  transition : 'fade',
  // 変化にかかる時間（ミリ秒）
  speed : 1000,
  // easingの種類
  easing : 'easeOutQuart',
  // ナビゲーションの形（"block" or "bubble"）
  navType : 'block',
  // 子要素の種類（"div" or "img"）
  childrenElementType : 'div',
  // ナビゲーション矢印の表示（trueで表示）
  arrows : true,
  // スライドショーの自動再生（falseで自動再生なし、trueで自動再生）
  autoPlay : true,
  // 自動再生時のスライド切替間隔（ミリ秒）
  autoPlayDuration : 5000,
  // キーボードの矢印キーによるスライド送りの設定（trueで有効）
  keyboardOnAlways : true,
  // 1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す
  hidePrevious : false
});

// <イベント設定>
$(function() {
  $('#back a').on('click',function(event){
    // #back内のaタグがクリックされたときの処理
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

// ・function(event)はfunction(e)とされることも多い。
// ・animate() は、アニメーション効果を設定するjQueryの関数。
// 　　→HTML要素のCSSプロパティを変化させることで動きを設定。
/*　$('セレクタ名').animate({
　　　  変化対象のプロパティ名:変化値
　　}, アニメーションの動作時間);
*/
// ・scrollTop は、スクロール位置を取得できるメソッド。
// 　　→今回は「scrollTop:0」を指定しているので、「最上部に移動する」の意味になる。
// ・アニメーションの動作時間を「800」で指定しているので、「800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」の意味になる。
// 　　→アニメーションの動作時間は、ミリ秒で指定する以外にも、「slow」、「normal」、「fast」で指定することも可能。
// ・ページ全体に対して処理を実行したいので、セレクタには、$('body, html')が設定されている。
// 　　→「body要素またはhtml要素」の意味になる。
// 　　→2つの要素を指定するのは、ユーザの利用環境によって指定対象の要素が変化するため。
// ・event.preventDefault(); は、aタグの機能を無効にするメソッド。