'use client'

import { useState } from 'react'
import { Locale } from '@/lib/types'

interface ContactFormProps {
  locale: Locale
}

export default function ContactForm({ locale }: ContactFormProps) {
  const [message, setMessage] = useState('')
  const [privacyChecked, setPrivacyChecked] = useState(false)
  const [marketingChecked, setMarketingChecked] = useState(false)

  const t = {
    ko: {
      name: '이름',
      namePlaceholder: '이름을 입력해주세요.',
      company: '회사명',
      companyPlaceholder: '회사명을 입력해주세요.',
      email: '이메일주소',
      emailPlaceholder: '이메일 주소를 입력해주세요.',
      phone: '연락처',
      phonePlaceholder: '대시(-)를 제외한 숫자만 입력해주세요.',
      message: '문의내용',
      messagePlaceholder: '내용을 입력해주세요.',
      privacyTitle: '개인정보 수집 및 이용약관 안내',
      privacyLabel: '개인정보 처리방침에 동의합니다.',
      privacyRequired: '(필수)',
      privacyViewAll: '전문보기',
      marketingLabel: '하임덱스의 마케팅 정보를 수신하는 데 동의합니다.',
      marketingOptional: '(선택)',
      submit: '상담 예약하기',
      required: '*',
    },
    en: {
      name: 'Name',
      namePlaceholder: 'Your full name',
      company: 'Company',
      companyPlaceholder: 'Your company name',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      phone: 'Phone',
      phonePlaceholder: 'Numbers only, no dashes',
      message: 'Message',
      messagePlaceholder: 'Tell us about your video workflow or questions.',
      privacyTitle: 'Privacy & Terms',
      privacyLabel: 'I agree to the privacy policy.',
      privacyRequired: '(Required)',
      privacyViewAll: 'Read full policy',
      marketingLabel: 'I\'d like to receive product updates from Heimdex.',
      marketingOptional: '(Optional)',
      submit: 'Book a Demo',
      required: '*',
    },
  }

  const text = t[locale]
  const isSubmitEnabled = privacyChecked

  return (
    <form
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-900 mb-2">
          {text.name} <span className="text-red-500">{text.required}</span>
        </label>
        <input
          type="text"
          placeholder={text.namePlaceholder}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
        />
      </div>

      {/* Company */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-900 mb-2">
          {text.company}
        </label>
        <input
          type="text"
          placeholder={text.companyPlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-900 mb-2">
          {text.email} <span className="text-red-500">{text.required}</span>
        </label>
        <input
          type="email"
          placeholder={text.emailPlaceholder}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
        />
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-900 mb-2">
          {text.phone} <span className="text-red-500">{text.required}</span>
        </label>
        <input
          type="tel"
          placeholder={text.phonePlaceholder}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
        />
      </div>

      {/* Message */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-900 mb-2">
          {text.message}
        </label>
        <div className="relative">
          <textarea
            placeholder={text.messagePlaceholder}
            maxLength={300}
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors resize-none"
          />
          <span className="absolute bottom-3 right-3 text-xs text-gray-400">
            {message.length}/300
          </span>
        </div>
      </div>

      {/* Privacy */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">{text.privacyTitle}</h4>

        <div className="flex items-center justify-between mb-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={privacyChecked}
              onChange={(e) => setPrivacyChecked(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-accent-blue focus:ring-accent-blue"
            />
            <span className="text-sm text-gray-700">
              {text.privacyLabel} <span className="text-accent-blue">{text.privacyRequired}</span>
            </span>
          </label>
          <button type="button" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            {text.privacyViewAll}
          </button>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={marketingChecked}
            onChange={(e) => setMarketingChecked(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-accent-blue focus:ring-accent-blue"
          />
          <span className="text-sm text-gray-700">
            {text.marketingLabel} <span className="text-accent-blue">{text.marketingOptional}</span>
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isSubmitEnabled}
        className={`w-full py-3 rounded-lg text-sm font-medium transition-colors ${
          isSubmitEnabled
            ? 'bg-accent-blue text-white hover:opacity-90'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        {text.submit}
      </button>
    </form>
  )
}
