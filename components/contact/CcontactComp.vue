<template>
    <section id="Newtop" class="Ccontact">
        <!-- 装飾 -->
        <div class="Cbackground">
            <div class="Cbackground__cnt">
                <div class="Cball1"></div>
                <div class="Cball2"></div>
            </div>
        </div>

        <!-- コンタクト -->
        <div class="Ctitle">
            <h1>CONTACT</h1>
            <p>お問い合わせ</p>
            <span></span>
        </div>
        <div class="form load-in load-in3">
            <form 
            class="form__content" 
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeYS-RIR7ecKOeStuY8bfHnUt1N7qqKJDfm3EERvkAyiCe7VQ/formResponse"
            method="POST"
            target="hidden_iframe"
            onsubmit="submitted=true;"
            >
                <div class="form__content--flex">
                    <p class="form-text">お名前<span class="asta">*</span></p>
                    <div :class="['form-box', { 'filled': inputValue1 !== '' || isInputFocused1 }]">
                        <input class="min" type="name" name="entry.1937557581" v-model="inputValue1" @focus="isInputFocused1 = true" @blur="isInputFocused1 = false" />
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">フリガナ<span class="asta">*</span></p>
                    <div :class="['form-box', { 'filled': inputValue2 !== '' || isInputFocused2 }]">
                        <input class="min" type="name" name="entry.1316280147" v-model="inputValue2" @focus="isInputFocused1 = true" @blur="isInputFocused2 = false" />
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">会社名<span class="asta">*</span></p>
                    <div :class="['form-box', { 'filled': inputValue3 !== '' || isInputFocused3 }]">
                        <input class="min" type="text" name="entry.685725615" v-model="inputValue3" @focus="isInputFocused2 = true" @blur="isInputFocused3 = false" />
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">メールアドレス<span class="asta">*</span></p>
                    <div :class="['form-box', { 'filled': inputValue4 !== '' || isInputFocused4 }]">
                        <input class="min" type="email" name="entry.1479391812" v-model="inputValue4" @focus="isInputFocused3 = true" @blur="isInputFocused4 = false" />
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">電話番号<span class="asta">*</span></p>
                    <div :class="['form-box', { 'filled': inputValue5 !== '' || isInputFocused5 }]">
                        <input class="min" type="tel" name="entry.2007202420" v-model="inputValue5" @focus="isInputFocused5 = true" @blur="isInputFocused5 = false" />
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">お問い合わせのサービス<span class="asta">*</span></p>
                    <div :class="['form-box', 'select', { 'filled': selectedValue1 !== null }]">
                        <select class="min" name="entry.725579230" v-model="selectedValue1" required>
                            <option value="Webサイト制作(5ページ)">Webサイト制作(5ページ)</option>
                            <option value="LPサイト制作">LPサイト制作</option>
                            <option value="microCMS NUXT3webサイト制作(キャンペーン中)">microCMS NUXT3webサイト制作(キャンペーン中)</option>
                            <option value="サイト保守/運用">サイト保守/運用</option>
                            <option value="その他">その他</option>
                        </select>
                        <div class="img-under"></div>
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">想定総ページ数</p>
                    <div :class="['form-box', 'select', { 'filled': selectedValue2 !== null }]">
                        <select class="min" name="entry.2027733137" v-model="selectedValue2" required>
                            <option value="1P(LPサイトなど)">1ページ(LPサイトなど)</option>
                            <option value="～3P(TOP、ABOUT、CONTACTなどの構成)">～3ページ(TOP、ABOUT、CONTACTなどの構成)</option>
                            <option value="～5P(TOP、ABOUT、SERVICE、BLOG、CONTACTなどの構成)">～5ページ(TOP、ABOUT、SERVICE、BLOG、CONTACTなどの構成)</option>
                            <option value="～10P(コーポレートサイト等)">～10ページ(コーポレートサイト等)</option>
                            <option value="相談して決めたい">相談して決めたい</option>
                        </select>
                        <div class="img-under"></div>
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">ご予算上限</p>
                    <div :class="['form-box', 'select', { 'filled': selectedValue3 !== null }]">
                        <select class="min" name="entry.456660078" v-model="selectedValue3" required>
                            <option value="18万～20万円">18万～20万円</option>
                            <option value="20万～30万円">20万～30万円</option>
                            <option value="40万～50万円">40万～50万円</option>
                            <option value="50万～">50万～</option>
                        </select>
                        <div class="img-under"></div>
                    </div>
                </div>
                <div class="form__content--flex">
                    <p class="form-text">ご希望の納期</p>
                    <div :class="['form-box', 'select', { 'filled': selectedValue4 !== null }]">
                        <select class="min" name="entry.245700081" v-model="selectedValue4" required>
                            <option value="1～2か月">1～2か月</option>
                            <option value="2～4か月">2～4か月</option>
                            <option value="4～6か月">4～6か月</option>
                            <option value="6～12か月">6～12か月</option>
                        </select>
                        <div class="img-under"></div>
                    </div>
                </div>
                <div class="form__content--flex-large">
                    <p class="form-text">お問い合わせ内容<span class="asta">*</span></p>
                    <div :class="['form-box-large', { 'form-box-large': inputValue6 !== '' || isInputFocused6 }]">
                        <textarea class="large" placeholder="ご依頼内容の詳細についてお伝えください。ご相談したいサイトURLがあればあわせてお知らせいただけますと幸いです。" name="entry.797986795" v-model="inputValue6" @focus="isInputFocused6 = true" @blur="isInputFocused6 = false" rows="3" cols="50"></textarea>
                    </div>
                </div>

                <div class="radio">
                    <input  class="radio__button" type="checkbox" name="policy" id="policy" v-model="policyChecked" />
                    <label class="radio__text" for="policy"><a href="">プライバシーポリシー</a>に同意する<span class="asta">*</span></label>
                </div>

                <div class="form-submit-box">
                    <div class="NContact__button">
                        <div class="main-contact-btn">
                            <button class="form-submit Mbutton" type="submit" @click="submitForm" :disabled="!policyChecked">送信</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- 注意文モーダル -->
            <div v-if="showModal" class="contactmodal">
                <div class="contactmodal-content">
                    <h3>{{ modalTitle }}</h3>
                    <p>{{ modalText }}</p>
                    <button @click="closeModal">閉じる</button>
                </div>
            </div>
            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style="display: none"
                >
            </iframe>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                selectedValue1: null,
                selectedValue2: null,
                selectedValue3: null,
                selectedValue4: null,
                inputValue1: '',
                inputValue2: '',
                inputValue3: '',
                inputValue4: '',
                inputValue5: '',
                inputValue6: '',
                isInputFocused1: false,
                isInputFocused2: false,
                isInputFocused3: false,
                isInputFocused4: false,
                isInputFocused5: false,
                isInputFocused6: false,
                showModal: false,
                // モーダルのテキスト格納
                modalTitle: '',
                modalText: '',
                // ポリシーチェック状態確認
                policyChecked: false,
            };
        },
        computed: {
            isFormValid() {
                return (
                    this.inputValue1.trim() !== '' &&
                    this.inputValue2.trim() !== '' &&
                    this.inputValue3.trim() !== '' &&
                    this.inputValue4.trim() !== '' &&
                    this.inputValue5.trim() !== '' &&
                    this.inputValue6.trim() !== '' &&
                    this.selectedValue1 !== null
                );
            },
        },
        methods: {
            submitForm(event) {

            if (!this.policyChecked) {
                // チェックボックスが未チェックの場合、フォーム送信を中止
                return;
            }

            if (this.isFormValid) {
                console.log("good");
                // フォームを送信する処理
                // モーダルのテキストを設定
                this.modalTitle = '送信成功';
                this.modalText = 'フォームが正常に送信されました !';
            } else {
                console.log("not");
                // モーダルのテキストを設定
                this.modalTitle = '注意';
                this.modalText = '条件を満たしていません !';
            }

            // モーダルを表示
            this.showModal = true;
            },
            closeModal() {
                this.showModal = false;
                window.location.reload(); // サイトをリロード
            },
            // 他のメソッドの定義
        },
    };
</script>

<style scoped>
.filled {
    height: 8rem !important;
    background-color: rgb(232, 240, 254);
}
.contactmodal{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1000;
    background-color: rgba(83, 81, 81, 0.751);
    display: flex;
    align-items: center;
    justify-content: center;
}
.contactmodal-content{
    width: 50rem;
    height: 25rem;
    background-color: rgb(246, 242, 242);
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 80rem;
        height: 40rem;
        border-radius:3rem;
    }
}

.contactmodal-content h3{
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    font-size: 2.2rem;
    color: 	#333333;
    @media screen and (max-width: 768px) {
        font-size:4rem;
    }
}
.contactmodal-content p{
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
    color: 	#333333;
    @media screen and (max-width: 768px) {
        font-size:3.8rem;
    }
}
.contactmodal-content button{
    border: solid 1px #D16EFD;
    background-color: #D16EFD;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1607843137);
    color: white;
    width: 14rem;
    height: 3.5rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    @media screen and (max-width: 768px) {
        font-size:3rem;
        width: 25rem;
        height: 7rem;
        border-radius: 5rem;
    }
}
</style>