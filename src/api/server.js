import { http, HttpResponse } from 'msw'
import { parseISO } from 'date-fns'
import { nanoid } from '@reduxjs/toolkit'
import { faker } from '@faker-js/faker/locale/en'

const NUM_USERS = 3
const POSTS_PER_USER = 3
const RECENT_NOTIFICATIONS_DAYS = 7
